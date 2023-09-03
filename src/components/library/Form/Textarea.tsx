import React from "react";

interface Props {
  value: string;
  placeholder: string;
  disabled?: boolean;
  onChange: (value: string) => void;
}

const Textarea = ({
  value,
  placeholder,
  disabled = false,
  onChange,
}: Props) => {
  const baseClasses = "p-3 rounded-sm resize-none placeholder:text-darkLighter";
  const activeClasses = "p-3 input-focus shadow-thirdMain bg-lightDark";
  const disabledClasses = "p-3 bg-lightDarker";
  return (
    <textarea
      className={`${baseClasses} ${disabled ? disabledClasses : activeClasses}`}
      disabled={disabled}
      rows={8}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Textarea;
