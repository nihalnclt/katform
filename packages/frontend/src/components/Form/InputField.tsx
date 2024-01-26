import { ChangeEvent } from "react";
import clsx from "clsx";

import { FieldWrapper, FieldWrapperPassThroughProps } from "./FieldWrapper";

type InputFieldProps = FieldWrapperPassThroughProps & {
  type?: "text" | "email" | "password";
  className?: string;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const InputField = (props: InputFieldProps) => {
  const { type = "text", label, className, onChange, error, disabled } = props;

  return (
    <FieldWrapper label={label} error={error}>
      <input
        type={type}
        className={clsx(
          "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",
          className
        )}
        onChange={onChange}
        disabled={disabled}
      />
    </FieldWrapper>
  );
};
