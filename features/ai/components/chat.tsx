'use client';

import { useEffect, useRef, useState } from 'react';

import { useTranslations } from 'next-intl';

import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport, lastAssistantMessageIsCompleteWithToolCalls } from 'ai';
import { MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

import { useFloatingChatStore } from '../stores/floating-chat.store';
import { ChatMessage } from '../tools';
import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from './ai-elements/conversation';
import { Message, MessageContent } from './ai-elements/message';
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
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [text, setText] = useState('');

  const externalPrompt = useFloatingChatStore((state) => state.prompt);
  const clearExternalPrompt = useFloatingChatStore((state) => state.setPrompt);
  const shouldShowIntro = useFloatingChatStore((state) => state.shouldShowIntro);
  const setShouldShowIntro = useFloatingChatStore((state) => state.setShouldShowIntro);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const starterPrompts = [
    t('suggestions.1'),
    t('suggestions.2'),
    t('suggestions.3'),
    t('suggestions.4'),
    t('suggestions.5'),
  ];

  const { messages, sendMessage, status, addToolResult, error, stop, setMessages } =
    useChat<ChatMessage>({
      transport: new DefaultChatTransport({ api: '/api/ai/chat' }),
      sendAutomaticallyWhen: lastAssistantMessageIsCompleteWithToolCalls,
      async onToolCall({ toolCall }) {
        if (toolCall.dynamic) return;
        if (toolCall.toolName === 'displayPhoneCallRequestForm') {
          setIsInputDisabled(true);
        }
      },
    });

  const firePrompt = (prompt: string) => {
    sendMessage({ text: prompt });
  };

  const handleSubmit = async (message: PromptInputMessage) => {
    const hasText = Boolean(message.text);
    const hasAttachments = Boolean(message.files?.length);
    if (!(hasText || hasAttachments)) return;

    // Prevent sending new messages while AI is responding
    if (status === 'streaming' || status === 'submitted') {
      return;
    }

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
    if (messages.length === 0 && empty && e.key === 'Enter' && !e.shiftKey) {
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

  // Fire message when prompt is set from the store (e.g., from CTA button)
  useEffect(() => {
    if (externalPrompt) {
      sendMessage({ text: externalPrompt });
      clearExternalPrompt(null);
    }
  }, [externalPrompt, clearExternalPrompt, sendMessage]);

  // Show intro message when chat is opened automatically
  useEffect(() => {
    if (shouldShowIntro && messages.length === 0) {
      // Add assistant message directly to messages array
      setMessages([
        {
          id: 'intro-message',
          role: 'assistant',
          parts: [
            {
              type: 'text',
              text: t('introMessage'),
            },
          ],
        },
      ]);
      setShouldShowIntro(false);
    }
  }, [shouldShowIntro, messages.length, setMessages, t, setShouldShowIntro]);

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
                description=''
              />
              <Suggestions className='mx-auto flex max-w-min flex-wrap items-center justify-center'>
                {starterPrompts.map((suggestion, i) => (
                  <Suggestion
                    key={suggestion}
                    variant={'default'}
                    onClick={handleSuggestionClick}
                    // Prefix with the shortcut number for clarity
                    suggestion={`${i + 1}. ${suggestion}`}
                    className='text-xs'
                  />
                ))}
              </Suggestions>
            </div>
          ) : (
            messages.map((message) => (
              <Message from={message.role} key={message.id}>
                <MessageContent
                  variant={'flat'}
                  className={message.role === 'assistant' ? 'rounded-none' : ''}
                >
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
                {/* {message.role === 'assistant' && (
                  <MessageAvatar name='Terry Henrard' src='/terry-henrard.jpg' />
                )} */}
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
        <PromptInputFooter className='w-auto'>
          <PromptInputTools />
          <PromptInputSubmit
            disabled={(!text && !status) || isInputDisabled}
            status={status}
            onClick={(e) => {
              if (status === 'streaming' || status === 'submitted') {
                e.preventDefault();
                stop();
              }
            }}
          />
        </PromptInputFooter>
      </PromptInput>

      <div className='mt-4 flex items-center justify-center'>
        <p className='text-muted-foreground text-xs'>{tHome('disclaimer')}</p>
      </div>
    </div>
  );
}
