import React from "react";
import { ValidationError } from "yup";
import { TextRegular, TextSmall } from "../Typography";

interface Props {
  children: React.ReactNode;
  name: string;
  errors: ValidationError[];
  paddingBottom?: string;
}

const WrapperWErrorMsg = ({
  children,
  name,
  errors,
  paddingBottom = "7",
}: Props) => {
  const error = errors.find((error) => error?.path === name);
  return (
    <div className={`w-full pb-${paddingBottom} relative`}>
      {children}
      <div className="absolute left-0 bottom-0">
        <TextRegular color="thirdLight">{error?.message}</TextRegular>
      </div>
    </div>
  );
};

export default WrapperWErrorMsg;
