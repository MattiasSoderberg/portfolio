"use client";
import React, { useState, useRef } from "react";
import * as yup from "yup";
import Input from "../Form/Input";
import { H2, TextLarge } from "../Typography";
import Textarea from "../Form/Textarea";
import ButtonStandard from "../Button/variants/ButtonStandard";
import useModal from "@/hooks/useModal";
import WrapperWErrorMsg from "../Form/WrapperWErrorMsg";

type ResponseMessage = {
  isSending: boolean;
  status?: number;
  message?: string;
};

const ContactContent = () => {
  const [nameInputValue, setNameInputValue] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [messageInputValue, setMessageInputValue] = useState("");
  const [responseMessage, setResponseMessage] = useState<ResponseMessage>({
    isSending: false,
  });
  const [validationErrors, setValidationErrors] = useState<
    yup.ValidationError[]
  >([]);
  const { closeModal } = useModal();

  const form = useRef(null);

  const handleOnInputChange = (value: string): void => {
    setNameInputValue(value);
  };

  const handleOnEmailInputChange = (value: string): void => {
    setEmailInputValue(value);
  };

  const handleOnMessageInputChange = (value: string): void => {
    setMessageInputValue(value);
  };

  const formSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .required("Email is required")
      .email("Must be a valid email"),
    message: yup.string().required("Message is required"),
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationErrors([]);

    try {
      const payload = {
        name: nameInputValue,
        email: emailInputValue,
        message: messageInputValue,
      };
      formSchema.validateSync(payload, { abortEarly: false });

      setResponseMessage({ isSending: true, message: "Sending email..." });

      const url = "/api/email";
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        method: "POST",
      });
      const json = await response.json();

      if (response?.status === 200) {
        setResponseMessage({
          isSending: false,
          status: response.status,
          message: json.message,
        });
      } else {
        setResponseMessage({
          isSending: false,
          status: response.status,
          message: json.message,
        });
      }
    } catch (errors) {
      setValidationErrors((errors as yup.ValidationError).inner);
    }
  };

  return (
    <div className="w-full h-full flex flex-col gap-8 p-4 sm:w-[400px] 2xl:w-[500px]">
      <H2>Contact</H2>
      <form
        ref={form}
        className="flex flex-col gap-5 text-lg"
        onSubmit={(e) => onSubmit(e)}
      >
        <WrapperWErrorMsg name="name" errors={validationErrors}>
          <Input
            focus
            disabled={
              responseMessage?.status === 200 || responseMessage.isSending
            }
            value={nameInputValue}
            onChange={handleOnInputChange}
            placeholder="Name"
          />
        </WrapperWErrorMsg>
        <WrapperWErrorMsg name="email" errors={validationErrors}>
          <Input
            disabled={
              responseMessage?.status === 200 || responseMessage.isSending
            }
            value={emailInputValue}
            onChange={handleOnEmailInputChange}
            placeholder="Email"
          />
        </WrapperWErrorMsg>
        <WrapperWErrorMsg name="message" errors={validationErrors}>
          <Textarea
            disabled={
              responseMessage?.status === 200 || responseMessage.isSending
            }
            value={messageInputValue}
            onChange={handleOnMessageInputChange}
            placeholder="Message"
          />
        </WrapperWErrorMsg>
        <div className="w-full flex flex-col pb-10 relative">
          {responseMessage.status === 200 ? (
            <ButtonStandard background="bg-[#363738]" onClick={closeModal}>
              Close
            </ButtonStandard>
          ) : (
            <ButtonStandard type="submit" disabled={responseMessage.isSending}>
              {responseMessage.isSending ? "Sending..." : "Send"}
            </ButtonStandard>
          )}
          <div className="absolute left-0 bottom-0">
            {responseMessage.isSending ? (
              <TextLarge>{responseMessage?.message}</TextLarge>
            ) : (
              responseMessage.message && (
                <TextLarge
                  color={
                    responseMessage.status !== 200 ? "thirdLight" : "secondMain"
                  }
                >
                  {responseMessage?.message}
                </TextLarge>
              )
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactContent;
