import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { FormField } from "../types";

export interface FormBuilderState {
  fields: FormField[];
}

const initialState: FormBuilderState = {
  fields: [],
};

export const formBuilderSlice = createSlice({
  name: "form-builder",
  initialState,
  reducers: {
    addFieldToCurrentForm: (state, action: PayloadAction<FormField>) => {
      state.fields.push(action.payload);
    },
  },
});

export const { addFieldToCurrentForm } = formBuilderSlice.actions;

export default formBuilderSlice.reducer;
