import { CreateForm, FormField } from "../../core/types";
import { FormDbRepositoryImplType } from "../../frameworks/database/mongodb/repositories/formDbRepositoryImpl";

const formDbRepository = (repository: ReturnType<FormDbRepositoryImplType>) => {
  const findByFormId = (formId: string) => repository.findByFormId(formId);
  const create = (formEntity: CreateForm) => repository.create(formEntity);
  const updateFormFieldsByFormId = (formId: string, fields: FormField[]) =>
    repository.updateFormFieldsByFormId(formId, fields);

  return { findByFormId, create, updateFormFieldsByFormId };
};

export default formDbRepository;
export type FormDbRepositoryType = typeof formDbRepository;
