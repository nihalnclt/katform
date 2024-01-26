import { useSelector } from "react-redux";

import { RootState } from "../../../../redux/store";
import { FBFormField } from "./FBFormField";

export const FBForm = () => {
  const { fields } = useSelector((state: RootState) => state.formBuilder);

  return (
    <div className="w-[400px] max-w-[100%]">
      {fields?.map((field, index) => {
        return <FBFormField key={index} field={field} />;
      })}

      <div>
        <button className="bg-rose-500 text-white font-medium px-3 rounded py-1">Submit</button>
      </div>
    </div>
  );
};
