import { FormDbRepositoryImplType } from "../../../frameworks/database/mongodb/repositories/formDbRepositoryImpl";

interface singleFormUseCaseType {
  user: any;
  formId: string;
  formRepository: ReturnType<FormDbRepositoryImplType>;
}

export const singleFormUseCase = ({ user, formId, formRepository }: singleFormUseCaseType) => {};
