'use client';

import { useEffect, useEffectEvent, useRef, useState } from 'react';

import { useTranslations } from 'next-intl';

import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport, lastAssistantMessageIsCompleteWithToolCalls } from 'ai';
import { MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

import { ChatMessage } from '../tools';
import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from './ai-elements/conversation';
import { Message, MessageAvatar, MessageContent } from './ai-elements/message';
import {
  PromptInput,
  PromptInputBody,
  PromptInputFooter,
  PromptInputMessage,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from './ai-elements/prompt-input';
import { Response } from './ai-elements/response';
import { Suggestion, Suggestions } from './ai-elements/suggestion';
import { PhoneCallRequestForm } from './phone-call-request-form';

export default function Chat() {
  const t = useTranslations('home.chat');
  const tHome = useTranslations('home');
  const tPhone = useTranslations('phoneCallRequestForm');
  const [text, setText] = useState('');
  const [isInputDisabled, setIsInputDisabled] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const starterPrompts = [
    t('suggestions.1'),
    t('suggestions.2'),
    t('suggestions.3'),
    t('suggestions.4'),
    t('suggestions.5'),
  ];

  const { messages, sendMessage, status, addToolResult, error, stop } = useChat<ChatMessage>({
    transport: new DefaultChatTransport({ api: '/api/ai/chat' }),
    sendAutomaticallyWhen: lastAssistantMessageIsCompleteWithToolCalls,
    async onToolCall({ toolCall }) {
      if (toolCall.dynamic) return;
      if (toolCall.toolName === 'displayPhoneCallRequestForm') {
        setIsInputDisabled(true);
      }
    },
  });

  const onFirePrompt = useEffectEvent((prompt: string) => {
    sendMessage({ text: prompt });
  });

  const firePrompt = (prompt: string) => {
    sendMessage({ text: prompt });
  };

  const handleSubmit = async (message: PromptInputMessage) => {
    const hasText = Boolean(message.text);
    const hasAttachments = Boolean(message.files?.length);
    if (!(hasText || hasAttachments)) return;

    sendMessage({
      text: message.text || 'Sent with attachments',
      files: message.files,
    });
    setText('');
  };

  const handleSuggestionClick = (suggestion: string) => {
    // Extract the actual suggestion text (remove the "1. " prefix)
    const actualSuggestion = suggestion.replace(/^\d+\.\s*/, '');
    firePrompt(actualSuggestion);
  };

  const onTextareaKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    const empty = text.trim().length === 0;

    // Send first starter prompt on Enter (no Shift) when empty.
    if (empty && e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      firePrompt(t('suggestions.1'));
      return;
    }

    // Submit message on Enter (no Shift) when not empty.
    if (!empty && e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit({ text });
      return;
    }

    // Number keys to trigger suggestions 1-5 when empty.
    if (empty && /^[1-5]$/.test(e.key)) {
      e.preventDefault();
      const idx = Number(e.key);
      firePrompt(t(`suggestions.${idx}` as any));
    }
  };

  useEffect(() => {
    if (!textareaRef.current) return;
    textareaRef.current?.focus();
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(t('errors.generic'), { duration: 5000 });
    }
  }, [error, t]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const prompt = decodeURIComponent(params.get('prompt') || '');

    if (prompt) {
      onFirePrompt(prompt);
      params.delete('prompt');
      const newPath = window.location.pathname + (params.toString() ? `?${params.toString()}` : '');
      window.history.replaceState(null, '', newPath);
    }
  }, []);

  return (
    <div className='flex h-full flex-col justify-between'>
      <Conversation className='relative w-full'>
        <ConversationContent
          className={`${messages.length <= 0 ? 'flex h-full items-center justify-center' : ''}`}
        >
          {messages.length === 0 ? (
            <div>
              <ConversationEmptyState
                icon={<MessageSquare className='size-12' />}
                title={t('emptyState.title')}
                description={t('emptyState.description')}
              />
              <Suggestions className='mx-auto flex max-w-xl flex-wrap items-center justify-center'>
                {starterPrompts.map((suggestion, i) => (
                  <Suggestion
                    key={suggestion}
                    variant={'default'}
                    onClick={handleSuggestionClick}
                    // Prefix with the shortcut number for clarity
                    suggestion={`${i + 1}. ${suggestion}`}
                  />
                ))}
              </Suggestions>
            </div>
          ) : (
            messages.map((message) => (
              <Message from={message.role} key={message.id}>
                <MessageContent>
                  {message.parts.map((part, i) => {
                    switch (part.type) {
                      case 'text':
                        return <Response key={`${message.id}-${i}`}>{part.text}</Response>;
                      case 'tool-displayPhoneCallRequestForm': {
                        const callId = part.toolCallId;
                        switch (part.state) {
                          case 'input-streaming':
                            return (
                              <div key={callId}>
                                <p>{tPhone('requesting')}</p>
                              </div>
                            );
                          case 'input-available':
                            return (
                              <PhoneCallRequestForm
                                key={callId}
                                callId={callId}
                                addToolResult={addToolResult}
                                message={part.input.message}
                                messages={messages}
                                setIsInputDisabled={setIsInputDisabled}
                              />
                            );
                          case 'output-available':
                            return (
                              <div key={callId}>
                                <Response>{part.input.message}</Response>
                              </div>
                            );
                          case 'output-error':
                            return (
                              <div key={callId}>
                                <Response>{tPhone('error')}</Response>
                              </div>
                            );
                        }
                      }
                      default:
                        return null;
                    }
                  })}
                </MessageContent>
                {message.role === 'assistant' && (
                  <MessageAvatar name='Terry Henrard' src='/terry-henrard.jpg' />
                )}
              </Message>
            ))
          )}
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>

      <PromptInput onSubmit={handleSubmit} className='mt-4' globalDrop multiple>
        <PromptInputBody>
          <PromptInputTextarea
            onChange={(e) => setText(e.target.value)}
            onKeyDown={onTextareaKeyDown}
            ref={textareaRef}
            value={text}
            disabled={isInputDisabled}
            placeholder={t('placeholder')}
          />
        </PromptInputBody>
        <PromptInputFooter>
          <PromptInputTools />
          <PromptInputSubmit disabled={(!text && !status) || isInputDisabled} status={status} />
        </PromptInputFooter>
      </PromptInput>

      <div className='mt-4 flex items-center justify-center'>
        <p className='text-muted-foreground text-xs'>{tHome('disclaimer')}</p>
      </div>
    </div>
  );
}
