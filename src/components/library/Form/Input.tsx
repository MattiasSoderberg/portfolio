import React from "react";

interface Props {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  type?: string;
  focus?: boolean;
  disabled?: boolean;
}

const Input = ({
  value,
  placeholder,
  onChange,
  type = "text",
  focus = false,
  disabled = false,
}: Props) => {
  const baseClasses = "w-full p-3 rounded-sm placeholder:text-darkLighter";
  const activeClasses = "input-focus shadow-thirdMain bg-lightDark";
  const disabledClasses = "bg-lightDarker";
  return (
    <div className="w-full pb-7">
      <input
        className={`${baseClasses} ${
          disabled ? disabledClasses : activeClasses
        }`}
        disabled={disabled}
        type={type}
        autoFocus={focus}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
