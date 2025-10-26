import { InferUITools, UIDataTypes, UIMessage } from "ai";
import { displayPhoneCallRequestForm } from "./display-phone-call-request-form";

export const tools = {
  displayPhoneCallRequestForm,
};

export type ChatTools = InferUITools<typeof tools>;
export type ChatMessage = UIMessage<never, UIDataTypes, ChatTools>;
