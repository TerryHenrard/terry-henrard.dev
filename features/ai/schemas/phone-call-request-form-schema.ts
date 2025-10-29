import { addDays, isWithinInterval, setHours, setMinutes } from "date-fns";
import z from "zod";

export const phoneCallRequestFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  phone: z.string().min(1, "Phone number is required").max(20, "Phone number is too long"),
  datetime: z
    .string()
    .min(1, "Date and time are required")
    .max(30, "Date and time is too long")
    .refine((datetime) => {
      return isWithinInterval(new Date(datetime), {
        start: setMinutes(setHours(addDays(new Date(), 1), 8), 0),
        end: setMinutes(setHours(addDays(new Date(), 30), 18), 0),
      });
    }, "Date and time are not within the range of 8:00 AM to 6:00 PM within the next 30 days"),
});

export type PhoneCallRequestForm = z.infer<typeof phoneCallRequestFormSchema>;
