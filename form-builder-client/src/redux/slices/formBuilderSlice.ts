import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CustFormData } from "../../types/formData.type";

export interface FormBuilderState {
    selectedFieldIndex: number;
    custformData: CustFormData[];
}

const initialState: FormBuilderState = {
    selectedFieldIndex: -1,
    custformData: [],
};

export const formBuilderSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        addNewCustomFiledToForm: (state, action: PayloadAction<CustFormData>) => {
            state.custformData.push(action.payload);
        },
        changeSelectedFormField: (state, action: PayloadAction<number>) => {
            state.selectedFieldIndex = action.payload;
        },
        handleChangeCustFormDataLabel: (state, action: PayloadAction<{ value: string }>) => {
            state.custformData[state.selectedFieldIndex].label = action.payload.value;
        },
    },
});

export const { addNewCustomFiledToForm, changeSelectedFormField, handleChangeCustFormDataLabel } =
    formBuilderSlice.actions;

export default formBuilderSlice.reducer;
