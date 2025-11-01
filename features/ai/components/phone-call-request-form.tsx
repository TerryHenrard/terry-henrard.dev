import { Dispatch, SetStateAction } from 'react';

import { useTranslations } from 'next-intl';

import { zodResolver } from '@hookform/resolvers/zod';
import { addDays, format, setHours, setMinutes } from 'date-fns';
import { Calendar, Phone } from 'lucide-react';
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
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name} className='flex items-center gap-2'>
                      <Calendar className='h-4 w-4' />
                      {t('card.fields.datetime.label')}
                    </FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      type='datetime-local'
                      aria-invalid={fieldState.invalid}
                      className='w-full'
                      min={format(
                        setMinutes(setHours(addDays(new Date(), 1), 8), 0),
                        "yyyy-MM-dd'T'HH:mm"
                      )}
                      max={format(
                        setMinutes(setHours(addDays(new Date(), 30), 18), 0),
                        "yyyy-MM-dd'T'HH:mm"
                      )}
                    />
                    <FieldDescription>{t('card.fields.datetime.description')}</FieldDescription>
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
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
