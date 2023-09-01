import { useDispatch } from "react-redux";
import { CustFormData } from "../../../../types/formData.type";
import { handleChangeCustFormDataLabel } from "../../../../redux/slices/formBuilderSlice";

interface IProps {
    selectedField: CustFormData;
}

export default function TextFieldSettings({ selectedField }: IProps) {
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <label htmlFor="">Label</label>
                <input
                    type="text"
                    value={selectedField.label || ""}
                    onChange={(e) =>
                        dispatch(handleChangeCustFormDataLabel({ value: e.target.value }))
                    }
                />
            </div>
            {/* <div>
                <label htmlFor="">Instructions</label>
                <textarea name="" id="" value={selectedField.instructions || ""}></textarea>
            </div> */}
        </div>
    );
}
