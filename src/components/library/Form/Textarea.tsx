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
  const baseClasses =
    "w-full p-3 rounded-sm resize-none placeholder:text-darkLighter";
  const activeClasses = "input-focus shadow-thirdMain bg-lightDark";
  const disabledClasses = "bg-lightDarker";
  return (
    <div className="w-full pb-5">
      <textarea
        className={`${baseClasses} ${
          disabled ? disabledClasses : activeClasses
        }`}
        disabled={disabled}
        rows={8}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Textarea;
