import { CustFormData } from "../../types/formData.type";

interface IProps {
    customFormData: CustFormData;
}

export default function CustTextField({ customFormData }: IProps) {
    return (
        <div>
            <label htmlFor="">{customFormData.label}</label>
            <input type="text" />
        </div>
    );
}
