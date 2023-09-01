import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../redux/sore";
import { FbHeader } from "../../features/FormBuilder/components/FbHeader";
import { FbSidebar } from "../../features/FormBuilder/components/FbSidebar";
import { FbFormDisplay } from "../../features/FormBuilder/components/FbFormDisplay";

export default function FormBuilderPage() {
    const { custformData } = useSelector((state: RootState) => state.formBuilder);
    const dispatch = useDispatch();

    return (
        <div>
            <FbHeader />
            <div>
                <FbSidebar />
                {/* <FbFormDisplay /> */}
            </div>
            {/* <div>
                <button
                    onClick={() => {
                        dispatch(
                            addNewCustomFiledToForm({
                                type: "text",
                                instructions: "",
                                isHidden: false,
                                isRequired: false,
                                label: "Custom Field",
                                readOnly: false,
                            })
                        );
                    }}
                >
                    Text Field
                </button>
            </div>

            {custformData?.map((data: CustFormData, index: number) => {
                return (
                    <div
                        key={index}
                        onClick={() => {
                            dispatch(changeSelectedFormField(index));
                        }}
                    >
                        {data.type === "text" ? (
                            <CustTextField customFormData={data} />
                        ) : data.type === "checkbox" ? (
                            <CustCheckBox />
                        ) : (
                            <div>Custom Filed Not Implemented!</div>
                        )}
                    </div>
                );
            })}

            <div>
                <FieldSettingsModal />
            </div> */}
        </div>
    );
}
