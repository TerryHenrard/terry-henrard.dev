import { ChatMessage } from '../../tools';

export async function summarizeHistory(messages: ChatMessage[]) {
  try {
    const response = await fetch('/api/ai/summarize', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages }),
    });

    if (!response.ok) {
      throw new Error(`Failed to summarize conversation: ${response.statusText}`);
    }

    const summary = await response.text();
    return summary;
  } catch (error) {
    throw error;
  }
}
