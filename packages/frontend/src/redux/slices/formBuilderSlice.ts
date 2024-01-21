import { createSlice } from "@reduxjs/toolkit";

export interface FormBuilderState {
  value: number;
}

const initialState: FormBuilderState = {
  value: 0,
};

export const formBuilderSlice = createSlice({
  name: "form-builder",
  initialState,
  reducers: {},
});

export const {} = formBuilderSlice.actions;

export default formBuilderSlice.reducer;
