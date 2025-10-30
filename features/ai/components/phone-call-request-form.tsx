import { Button } from "@/core/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/core/components/ui/card";
import { Input } from "@/core/components/ui/input";
import { Calendar, Phone } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { ChatTools } from "../tools";
import { Response } from "./ai-elements/response";

import { zodResolver } from "@hookform/resolvers/zod";
import { addDays, format, setHours, setMinutes } from "date-fns";

import { Field, FieldDescription, FieldError, FieldLabel } from "@/core/components/ui/field";
import { Spinner } from "@/core/components/ui/spinner";
import { Dispatch, SetStateAction } from "react";
import { summarizeHistory } from "../lib/utils/summarize-history";
import {
  phoneCallRequestFormSchema,
  type PhoneCallRequestForm,
} from "../schemas/phone-call-request-form-schema";
import { type ChatMessage } from "../tools";

interface PhoneCallRequestFormProps {
  callId: string;
  addToolResult: (result: {
    tool: "displayPhoneCallRequestForm";
    toolCallId: string;
    output: ChatTools["displayPhoneCallRequestForm"]["output"];
  }) => void;
  message: ChatTools["displayPhoneCallRequestForm"]["input"]["message"];
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
  const form = useForm<PhoneCallRequestForm>({
    resolver: zodResolver(phoneCallRequestFormSchema),
    defaultValues: { name: "", phone: "", datetime: "" },
  });

  const onSubmit = form.handleSubmit(async (data: PhoneCallRequestForm) => {
    try {
      const summary = await summarizeHistory(messages);
      const result = await fetch("/api/notify/discord", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, summary }),
      });

      if (!result.ok) {
        throw new Error(`Failed to send notification: ${result.statusText}`);
      }
    } catch {
      toast.error("There was an error scheduling your call. Please try again later.");
      addToolResult({
        tool: "displayPhoneCallRequestForm",
        toolCallId: callId,
        output: `Sorry, we couldn't schedule your call at this time. Please try to contact Terry directly.`,
      });
      setIsInputDisabled(false);
      return;
    }

    const [date, time] = (data.datetime || "").split("T");
    addToolResult({
      tool: "displayPhoneCallRequestForm",
      toolCallId: callId,
      output: `Phone call booked with ${data.name} (${data.phone}) on ${date} at ${time}.`,
    });

    toast.success("Your call has been scheduled successfully, Terry has been notified!");
    setIsInputDisabled(false);
  });

  const handleCancel = () => {
    addToolResult({
      tool: "displayPhoneCallRequestForm",
      toolCallId: callId,
      output: `The phone call request has been purposely cancelled by the user clicking the cancel button.`,
    });
    setIsInputDisabled(false);
  };

  return (
    <div>
      <Response>{message}</Response>
      <form onSubmit={onSubmit} noValidate>
        <Card className="max-w-md mt-4 bg-transparent border-0 shadow-none">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">Schedule a Call</CardTitle>
            </div>
            <CardDescription>
              Fill out the details below to request a phone call with Terry.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Your name</FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder="John Doe"
                      autoComplete="name"
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />
            </div>
            <div className="space-y-2">
              <Controller
                name="phone"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Phone Number</FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      type="tel"
                      aria-invalid={fieldState.invalid}
                      placeholder="+32 123 456 789"
                      autoComplete="tel"
                      className="w-full"
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />
            </div>
            <div className="space-y-2">
              <Controller
                name="datetime"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name} className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Preferred Date & Time
                    </FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      type="datetime-local"
                      aria-invalid={fieldState.invalid}
                      className="w-full"
                      min={format(
                        setMinutes(setHours(addDays(new Date(), 1), 8), 0),
                        "yyyy-MM-dd'T'HH:mm"
                      )}
                      max={format(
                        setMinutes(setHours(addDays(new Date(), 30), 18), 0),
                        "yyyy-MM-dd'T'HH:mm"
                      )}
                    />
                    <FieldDescription>
                      Select a date and time between 8:00 AM and 6:00 PM within the next 30 days.
                    </FieldDescription>
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />
            </div>
          </CardContent>
          <CardFooter className="pt-4 flex gap-2">
            <Button
              type="button"
              className="flex-1 cursor-pointer"
              variant={"destructive"}
              onClick={handleCancel}
              disabled={form.formState.isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 cursor-pointer "
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <>
                  <Spinner />
                  Scheduling...
                </>
              ) : (
                <>
                  <Phone className="h-4 w-4 mr-2" />
                  Schedule Call
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
