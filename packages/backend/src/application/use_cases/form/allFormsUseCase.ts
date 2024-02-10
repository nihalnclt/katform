import { FormDbRepositoryImplType } from "../../../frameworks/database/mongodb/repositories/formDbRepositoryImpl";

interface allFormsUseCaseType {
  user: any;
  formRepository: ReturnType<FormDbRepositoryImplType>;
}

export const allFormsUseCase = ({ user, formRepository }: allFormsUseCaseType) => {};
