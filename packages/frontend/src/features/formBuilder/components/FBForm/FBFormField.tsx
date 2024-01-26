import { FormField } from "../../types";
import { FBFormLongTextField } from "./FBFormLongTextField";
import { FBFormShortTextField } from "./FBFormShortTextField";

interface FBFormFieldProps {
  field: FormField;
}

const formFieldComponents = {
  "short-text": <FBFormShortTextField />,
  "long-text": <FBFormLongTextField />,
};

export const FBFormField = ({ field }: FBFormFieldProps) => {
  // const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  return (
    <div className="">
      {formFieldComponents[field.type] ? (
        formFieldComponents[field.type]
      ) : (
        <div>Not Implemented Yet..!</div>
      )}
    </div>
  );
};
