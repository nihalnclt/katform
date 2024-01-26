import clsx from "clsx";

type FieldWrapperProps = {
  label?: string;
  className?: string;
  children: React.ReactNode;
  error?: string;
  description?: string;
};

export type FieldWrapperPassThroughProps = Omit<FieldWrapperProps, "className" | "children">;

export const FieldWrapper = (props: FieldWrapperProps) => {
  const { label, className, error, children } = props;

  return (
    <div>
      <label className={clsx("block text-sm font-medium text-gray-700", className)}>
        {label}
        <div className="mt-1">{children}</div>
      </label>
      {error && (
        <div role="alert" aria-label={error} className="text-sm font-semibold text-red-500">
          {error}
        </div>
      )}
    </div>
  );
};
