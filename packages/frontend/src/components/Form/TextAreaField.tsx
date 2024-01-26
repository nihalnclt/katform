import clsx from "clsx";

import { FieldWrapper, FieldWrapperPassThroughProps } from "./FieldWrapper";
import { ChangeEvent } from "react";

type TextAreaFieldProps = FieldWrapperPassThroughProps & {
  className?: string;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

export const TextAreaField = (props: TextAreaFieldProps) => {
  const { label, className, onChange, disabled, error } = props;
  return (
    <FieldWrapper label={label} error={error}>
      <textarea
        className={clsx(
          "appearance-none block w-full resize-none px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",
          className
        )}
        onChange={onChange}
        disabled={disabled}
      />
    </FieldWrapper>
  );
};
