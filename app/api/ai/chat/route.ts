import { openai } from '@ai-sdk/openai';
import { UIMessage, convertToModelMessages, stepCountIs, streamText } from 'ai';

import { system } from '@/features/ai/lib/system-prompt';
import { tools } from '@/features/ai/tools';

export async function POST(req: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json();

    const result = streamText({
      model: openai('gpt-4o-mini-2024-07-18'),
      messages: convertToModelMessages(messages),
      temperature: 0.1,
      system,
      tools,
      stopWhen: stepCountIs(5),
    });

    return result.toUIMessageStreamResponse();
  } catch {
    return new Response('Internal Server Error', { status: 500 });
  }
}
