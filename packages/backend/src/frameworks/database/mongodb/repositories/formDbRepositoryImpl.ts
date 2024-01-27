import { CreateForm, FormField } from "../../../../core/types";
import { Form } from "../models";

const formDbRepositoryImpl = () => {
  const findByFormId = (formId: string) => {
    return Form.findOne({ formId, isDeleted: false }).select("formId").lean();
  };

  const create = (formEntity: CreateForm) => {
    const newForm = new Form({
      formName: formEntity.formName,
      formId: formEntity.formId,
      fields: [],
    });
    return newForm.save();
  };

  const updateFormFieldsByFormId = (formId: string, fields: FormField[]) => {
    return Form.findOneAndUpdate(
      { formId, isDeleted: false },
      { fields },
      { runValidators: true, new: true }
    );
  };

  return { findByFormId, create, updateFormFieldsByFormId };
};

export type FormDbRepositoryImplType = typeof formDbRepositoryImpl;
export default formDbRepositoryImpl;
