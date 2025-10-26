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

const suggestions = [
  "Tell me about your projects",
  "What are your skills and expertise?",
  "Can you describe your professional experience?",
  "Show me your portfolio highlights",
  "What technologies do you work with?",
];

export default function Chat() {
  const [text, setText] = useState("");
  const [isInputDisabled, setIsInputDisabled] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { messages, sendMessage, status, addToolResult, error } = useChat<ChatMessage>({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
    sendAutomaticallyWhen: lastAssistantMessageIsCompleteWithToolCalls,
    async onToolCall({ toolCall }) {
      if (toolCall.dynamic) {
        return;
      }

      if (toolCall.toolName === "displayPhoneCallRequestForm") {
        setIsInputDisabled(true);
      }
    },
  });

  const handleSubmit = async (message: PromptInputMessage) => {
    const hasText = Boolean(message.text);
    const hasAttachments = Boolean(message.files?.length);

    if (!(hasText || hasAttachments)) {
      return;
    }

    sendMessage(
      {
        text: message.text || "Sent with attachments",
        files: message.files,
      }
      // {
      //   body: {
      //     model: model,
      //     webSearch: useWebSearch,
      //   },
      // }
    );
    setText("");
  };

  const handleSuggestionClick = (suggestion: string) => {
    sendMessage({ text: suggestion });
  };

  useEffect(() => {
    if (error) {
      toast.error("An error occurred while sending the message. Please try again.", {
        duration: 5000,
      });
    }
  }, [error]);

  return (
    <div className="flex flex-col justify-between h-full">
      <Conversation className="relative w-full">
        <ConversationContent
          className={` ${messages.length <= 0 ? "flex justify-center items-center h-full" : ""}`}
        >
          {messages.length === 0 ? (
            <div>
              <ConversationEmptyState
                icon={<MessageSquare className="size-12" />}
                title="No messages yet"
                description="Start a conversation to see messages here"
              />
              <Suggestions className="flex items-center justify-center max-w-xl mx-auto flex-wrap">
                {suggestions.map((suggestion) => (
                  <Suggestion
                    key={suggestion}
                    onClick={handleSuggestionClick}
                    suggestion={suggestion}
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
          {/* <PromptInputAttachments>
            {(attachment) => <PromptInputAttachment data={attachment} />}
          </PromptInputAttachments> */}
          <PromptInputTextarea
            onChange={(e) => setText(e.target.value)}
            ref={textareaRef}
            value={text}
            disabled={isInputDisabled}
          />
        </PromptInputBody>
        <PromptInputFooter>
          <PromptInputTools>
            {/* <PromptInputActionMenu>
              <PromptInputActionMenuTrigger />
              <PromptInputActionMenuContent>
                <PromptInputActionAddAttachments />
              </PromptInputActionMenuContent>
            </PromptInputActionMenu> */}
            {/* <PromptInputSpeechButton onTranscriptionChange={setText} textareaRef={textareaRef} />
            <PromptInputButton
              onClick={() => setUseWebSearch(!useWebSearch)}
              variant={useWebSearch ? "default" : "ghost"}
            >
              <GlobeIcon size={16} />
              <span>Search</span>
            </PromptInputButton>
            <PromptInputModelSelect
              onValueChange={(value) => {
                setModel(value);
              }}
              value={model}
            >
              <PromptInputModelSelectTrigger>
                <PromptInputModelSelectValue />
              </PromptInputModelSelectTrigger>
              <PromptInputModelSelectContent>
                {models.map((model) => (
                  <PromptInputModelSelectItem key={model.id} value={model.id}>
                    {model.name}
                  </PromptInputModelSelectItem>
                ))}
              </PromptInputModelSelectContent>
            </PromptInputModelSelect> */}
          </PromptInputTools>
          <PromptInputSubmit disabled={(!text && !status) || isInputDisabled} status={status} />
        </PromptInputFooter>
      </PromptInput>
    </div>
  );
}
