import { tool } from 'ai';
import { z } from 'zod';

export const displayPhoneCallRequestForm = tool({
  name: 'display_phone_call_request_form',
  description: 'Displays a form to the user to request a phone call.',
  inputSchema: z.object({
    message: z.string().describe('Short prompt to display above the phone call request form'),
  }),
  outputSchema: z.string().describe('Confirmation message after the phone call is scheduled'),
});
