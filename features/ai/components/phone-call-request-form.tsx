import { Dispatch, SetStateAction, useMemo } from 'react';

import { useTranslations } from 'next-intl';

import { zodResolver } from '@hookform/resolvers/zod';
import { addDays, format } from 'date-fns';
import { Calendar, Clock, Phone } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { Button } from '@/core/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/core/components/ui/card';
import { Field, FieldDescription, FieldError, FieldLabel } from '@/core/components/ui/field';
import { Input } from '@/core/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/core/components/ui/select';
import { Spinner } from '@/core/components/ui/spinner';

import { summarizeHistory } from '../lib/utils/summarize-history';
import {
  type PhoneCallRequestForm,
  phoneCallRequestFormSchema,
} from '../schemas/phone-call-request-form-schema';
import { type ChatMessage, ChatTools } from '../tools';
import { Response } from './ai-elements/response';

interface PhoneCallRequestFormProps {
  callId: string;
  addToolResult: (result: {
    tool: 'displayPhoneCallRequestForm';
    toolCallId: string;
    output: ChatTools['displayPhoneCallRequestForm']['output'];
  }) => void;
  message: ChatTools['displayPhoneCallRequestForm']['input']['message'];
  messages: ChatMessage[];
  setIsInputDisabled: Dispatch<SetStateAction<boolean>>;
}

export function PhoneCallRequestForm({
  callId,
  addToolResult,
  message,
  messages,
  setIsInputDisabled,
}: PhoneCallRequestFormProps) {
  const t = useTranslations('phoneCallRequestForm');
  const form = useForm<PhoneCallRequestForm>({
    resolver: zodResolver(phoneCallRequestFormSchema),
    defaultValues: { name: '', phone: '', datetime: '' },
  });

  // Generate time slots in 15-minute intervals from 8:00 AM to 6:00 PM
  const timeSlots = useMemo(() => {
    const slots: string[] = [];
    for (let hour = 8; hour <= 18; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        if (hour === 18 && minute > 0) break; // Stop at 6:00 PM
        const timeValue = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
        slots.push(timeValue);
      }
    }
    return slots;
  }, []);

  const onSubmit = form.handleSubmit(async (data: PhoneCallRequestForm) => {
    try {
      const summary = await summarizeHistory(messages);
      const result = await fetch('/api/notify/discord', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, summary }),
      });

      if (!result.ok) {
        throw new Error(`Failed to send notification: ${result.statusText}`);
      }
    } catch {
      toast.error(t('errorToast'));
      addToolResult({
        tool: 'displayPhoneCallRequestForm',
        toolCallId: callId,
        output: t('cannotSchedule'),
      });
      setIsInputDisabled(false);
      return;
    }

    const [date, time] = (data.datetime || '').split('T');
    addToolResult({
      tool: 'displayPhoneCallRequestForm',
      toolCallId: callId,
      output: t('booked', { name: data.name, phone: data.phone, date, time }),
    });

    toast.success(t('successToast'));
    setIsInputDisabled(false);
  });

  const handleCancel = () => {
    addToolResult({
      tool: 'displayPhoneCallRequestForm',
      toolCallId: callId,
      output: t('cancelled'),
    });
    setIsInputDisabled(false);
  };

  return (
    <div>
      <Response>{message}</Response>
      <form onSubmit={onSubmit} noValidate>
        <Card className='mt-4 max-w-md border-0 bg-transparent shadow-none'>
          <CardHeader className='pb-4'>
            <div className='flex items-center gap-2'>
              <Phone className='text-primary h-5 w-5' />
              <CardTitle className='text-lg'>{t('card.title')}</CardTitle>
            </div>
            <CardDescription dangerouslySetInnerHTML={{ __html: t.raw('card.description') }} />
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='space-y-2'>
              <Controller
                name='name'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>{t('card.fields.name.label')}</FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder={t('card.fields.name.placeholder')}
                      autoComplete='name'
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />
            </div>
            <div className='space-y-2'>
              <Controller
                name='phone'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>{t('card.fields.phone.label')}</FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      type='tel'
                      aria-invalid={fieldState.invalid}
                      placeholder={t('card.fields.phone.placeholder')}
                      autoComplete='tel'
                      className='w-full'
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />
            </div>
            <div className='space-y-2'>
              <Controller
                name='datetime'
                control={form.control}
                render={({ field, fieldState }) => {
                  const [dateValue, timeValue] = (field.value || '').split('T');

                  return (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name} className='flex items-center gap-2'>
                        <Calendar className='h-4 w-4' />
                        {t('card.fields.datetime.label')}
                      </FieldLabel>
                      <div className='flex gap-2'>
                        <Input
                          id={field.name}
                          type='date'
                          aria-invalid={fieldState.invalid}
                          className='flex-1'
                          value={dateValue || ''}
                          onChange={(e) => {
                            const newDate = e.target.value;
                            const time = timeValue || '08:00';
                            field.onChange(newDate ? `${newDate}T${time}` : '');
                          }}
                          min={format(addDays(new Date(), 1), 'yyyy-MM-dd')}
                          max={format(addDays(new Date(), 30), 'yyyy-MM-dd')}
                        />
                        <Select
                          value={timeValue || ''}
                          onValueChange={(newTime) => {
                            const date = dateValue || format(addDays(new Date(), 1), 'yyyy-MM-dd');
                            field.onChange(`${date}T${newTime}`);
                          }}
                        >
                          <SelectTrigger className='w-[140px]' aria-invalid={fieldState.invalid}>
                            <Clock className='mr-2 h-4 w-4' />
                            <SelectValue placeholder='Time' />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <FieldDescription>{t('card.fields.datetime.description')}</FieldDescription>
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  );
                }}
              />
            </div>
          </CardContent>
          <CardFooter className='flex gap-2 pt-4'>
            <Button
              type='button'
              className='flex-1 cursor-pointer'
              variant={'destructive'}
              onClick={handleCancel}
              disabled={form.formState.isSubmitting}
            >
              {t('card.buttons.cancel')}
            </Button>
            <Button
              type='submit'
              className='flex-1 cursor-pointer'
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <>
                  <Spinner />
                  {t('card.buttons.submitting')}
                </>
              ) : (
                <>
                  <Phone className='mr-2 h-4 w-4' />
                  {t('card.buttons.submit')}
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
