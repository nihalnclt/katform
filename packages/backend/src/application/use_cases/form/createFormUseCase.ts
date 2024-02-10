import { CreateForm } from "../../../core/types";
import { BadRequestError } from "../../../frameworks/common/errors";
import { FormDbRepositoryImplType } from "../../../frameworks/database/mongodb/repositories/formDbRepositoryImpl";
import { generateUniqueId } from "../../../utils";
import { createFormValidator } from "../validators/formValidator";

interface createFormUseCaseType {
  user: any;
  formName: string;
  formRepository: ReturnType<FormDbRepositoryImplType>;
}

export const createFormUseCase = async ({
  user,
  formName,
  formRepository,
}: createFormUseCaseType) => {
  const validationResult = createFormValidator({ formName });

  if (validationResult.error) {
    throw new BadRequestError(validationResult.error.message);
  }

  const newForm: CreateForm = {
    userId: user.id,
    formName,
    formId: generateUniqueId(7),
    fields: [],
  };

  return formRepository.create(newForm);
};
