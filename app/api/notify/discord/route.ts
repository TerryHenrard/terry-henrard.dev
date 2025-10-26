import { NextRequest } from "next/server";
import { phoneCallRequestFormSchema } from "../../../../features/ai/schema/phone-call-request-form-schema";

/**
 * Escape potentially unsafe characters in a string for Discord markdown.
 * @param str The input string to sanitize.
 * @returns The sanitized string.
 */
function safe(str: string) {
  return str.replace(/[*_`~>|]/g, "\\$&");
}

// TODO: Check date and time validity (e.g., not in the past, correct format, hours)
export async function POST(res: NextRequest) {
  try {
    const webhook = process.env.DISCORD_WEBHOOK_URL;
    if (!webhook) {
      return new Response("Discord webhook URL not configured", { status: 500 });
    }

    const { success, data } = phoneCallRequestFormSchema.safeParse(await res.json());

    if (!success) {
      return new Response("Invalid request body", { status: 400 });
    }

    const content = `@everyone Phone Call Request Received:
      - **Name:** ${safe(data.name)}
      - **Phone:** ${safe(data.phone)}
      - **Date & Time:** ${new Date(safe(data.datetime)).toLocaleString()}
      ---------------------------------------------------------
    `.replace(/\n\s+/g, "\n");

    const result = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    });

    if (!result.ok) {
      return new Response(`Failed to send Discord notification: ${result.statusText}`, {
        status: 502,
      });
    }

    return new Response("Notification sent successfully", { status: 200 });
  } catch (error) {
    return new Response(`Error processing request: ${error}`, { status: 500 });
  }
}
