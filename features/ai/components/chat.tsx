"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, lastAssistantMessageIsCompleteWithToolCalls } from "ai";
import { MessageSquare } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { ChatMessage } from "../tools";
import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from "./ai-elements/conversation";
import { Message, MessageAvatar, MessageContent } from "./ai-elements/message";
import {
  PromptInput,
  PromptInputBody,
  PromptInputFooter,
  PromptInputMessage,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from "./ai-elements/prompt-input";
import { Response } from "./ai-elements/response";
import { Suggestion, Suggestions } from "./ai-elements/suggestion";
import { PhoneCallRequestForm } from "./phone-call-request-form";

const starterPrompts = [
  "Show me your services with timelines & deliverables.",
  "What can you build for a B2B SaaS in 14 days?",
  "Can you build an AI assistant for my website?",
  "I want an mvp for my startup idea.",
  "Can we book a quick call?",
];

export default function Chat() {
  const [text, setText] = useState("");
  const [isInputDisabled, setIsInputDisabled] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { messages, sendMessage, status, addToolResult, error } = useChat<ChatMessage>({
    transport: new DefaultChatTransport({ api: "/api/ai/chat" }),
    sendAutomaticallyWhen: lastAssistantMessageIsCompleteWithToolCalls,
    async onToolCall({ toolCall }) {
      if (toolCall.dynamic) return;
      if (toolCall.toolName === "displayPhoneCallRequestForm") {
        setIsInputDisabled(true);
      }
    },
  });

  // Autofocus input on mount for "zero-friction" start.
  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  // Toast errors nicely.
  useEffect(() => {
    if (error) {
      toast.error("An error occurred. Please try again.", { duration: 5000 });
    }
  }, [error]);

  const firePrompt = (prompt: string) => {
    sendMessage({ text: prompt });
  };

  const handleSubmit = async (message: PromptInputMessage) => {
    const hasText = Boolean(message.text);
    const hasAttachments = Boolean(message.files?.length);
    if (!(hasText || hasAttachments)) return;

    sendMessage({
      text: message.text || "Sent with attachments",
      files: message.files,
    });
    setText("");
  };

  const handleSuggestionClick = (suggestion: string) => {
    firePrompt(suggestion);
  };

  // Keyboard UX:
  // - Enter on empty input = send first starter prompt.
  // - Enter on non-empty input = submit the message.
  // - Keys 1-5 on empty input = send corresponding starter prompt.
  const onTextareaKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    const empty = text.trim().length === 0;

    // Send first starter prompt on Enter (no Shift) when empty.
    if (empty && e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      firePrompt(starterPrompts[0]);
      return;
    }

    // Submit message on Enter (no Shift) when not empty.
    if (!empty && e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit({ text });
      return;
    }

    // Number keys to trigger suggestions 1-5 when empty.
    if (empty && /^[1-5]$/.test(e.key)) {
      e.preventDefault();
      const idx = Number(e.key) - 1;
      firePrompt(starterPrompts[idx]);
    }
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <Conversation className="relative w-full">
        <ConversationContent
          className={`${messages.length <= 0 ? "flex justify-center items-center h-full" : ""}`}
        >
          {messages.length === 0 ? (
            <div>
              <ConversationEmptyState
                icon={<MessageSquare className="size-12" />}
                title="Ask me anything about Terry"
                description="Press Enter to start or tap a suggestion below. You can also press 1-5 to pick a prompt."
              />
              <Suggestions className="flex items-center justify-center max-w-xl mx-auto flex-wrap">
                {starterPrompts.map((suggestion, i) => (
                  <Suggestion
                    key={suggestion}
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
                      case "text":
                        return <Response key={`${message.id}-${i}`}>{part.text}</Response>;
                      case "tool-displayPhoneCallRequestForm": {
                        const callId = part.toolCallId;
                        switch (part.state) {
                          case "input-streaming":
                            return (
                              <div key={callId}>
                                <p>Requesting phone call...</p>
                              </div>
                            );
                          case "input-available":
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
                          case "output-available":
                            return (
                              <div key={callId}>
                                <Response>{part.input.message}</Response>
                              </div>
                            );
                          case "output-error":
                            return (
                              <div key={callId}>
                                <Response>
                                  Sorry, something went wrong scheduling your call.
                                </Response>
                              </div>
                            );
                        }
                      }
                      default:
                        return null;
                    }
                  })}
                </MessageContent>
                {message.role === "assistant" && (
                  <MessageAvatar name="Terry Henrard" src="/terry-henrard.jpg" />
                )}
              </Message>
            ))
          )}
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>

      <PromptInput onSubmit={handleSubmit} className="mt-4" globalDrop multiple>
        <PromptInputBody>
          <PromptInputTextarea
            onChange={(e) => setText(e.target.value)}
            onKeyDown={onTextareaKeyDown}
            ref={textareaRef}
            value={text}
            disabled={isInputDisabled}
            placeholder="Press Enter to start • Type or paste anything • Press 1-5 to pick a prompt"
          />
        </PromptInputBody>
        <PromptInputFooter>
          <PromptInputTools />
          <PromptInputSubmit disabled={(!text && !status) || isInputDisabled} status={status} />
        </PromptInputFooter>
      </PromptInput>

      <div className="flex items-center justify-center mt-4">
        <p className="text-xs text-muted-foreground">
          Don't take what AI tells you for granted. It can make mistakes. It's for demonstration
          purposes only.
        </p>
      </div>
    </div>
  );
}
