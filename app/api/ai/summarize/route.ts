import { openai } from '@ai-sdk/openai';
import { convertToModelMessages, generateText } from 'ai';

import { ChatMessage } from '@/features/ai/tools';

export async function POST(req: Request) {
  try {
    const { messages }: { messages: ChatMessage[] } = await req.json();

    const filteredModelMessages = messages
      .filter((msg) => msg.role === 'user' || msg.role === 'assistant')
      .map((msg) => ({
        ...msg,
        parts: msg.parts.filter((part) => part.type === 'text'),
      }))
      // remove any messages that no longer have text parts
      .filter((msg) => Array.isArray(msg.parts) && msg.parts.length > 0);

    const { text } = await generateText({
      model: openai('gpt-4o-mini-2024-07-18'),
      temperature: 0.1,
      system:
        'You are a helpful assistant that provides concise summaries of conversations. Summarize the key points, decisions, and action items discussed.',
      messages: [
        ...convertToModelMessages(filteredModelMessages),
        {
          role: 'user',
          content:
            'Please provide a concise summary of the conversation above. The conversation is between a user (not me) and an AI assistant.',
        },
      ],
    });

    console.log('Summarization result:', text);

    return new Response(text, { status: 200 });
  } catch (error) {
    console.error('Error in summarize route:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
