import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/sore";
import { TextFieldSettings } from ".";

export default function FieldSettingsModal() {
    const { custformData, selectedFieldIndex } = useSelector(
        (state: RootState) => state.formBuilder
    );
    // const [selectedField, setSelectedField] = useState<CustFormData | null>(null);

    // useEffect(() => {
    //     if (selectedFieldIndex !== -1) {
    //         setSelectedField(custformData[selectedFieldIndex]);
    //     } else {
    //         setSelectedField(null);
    //     }
    // }, [selectedFieldIndex]);

    return (
        <div>
            {selectedFieldIndex !== -1 && custformData[selectedFieldIndex]?.type === "text" ? (
                <TextFieldSettings selectedField={custformData[selectedFieldIndex]} />
            ) : (
                <div>No Settings Implemented!</div>
            )}
        </div>
    );
}
