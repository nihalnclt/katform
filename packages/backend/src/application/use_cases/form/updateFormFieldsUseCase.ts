import { BadRequestError, NotFoundError } from "../../../frameworks/common/errors";
import { FormDbRepositoryImplType } from "../../../frameworks/database/mongodb/repositories/formDbRepositoryImpl";
import { updateFormFieldsValidator } from "../validators/formValidator";

interface updateFormFieldsUseCaseType {
  user: any;
  formId: string;
  fields: [];
  formRepository: ReturnType<FormDbRepositoryImplType>;
}

export const updateFormFieldsUseCase = async ({
  user,
  formId,
  fields,
  formRepository,
}: updateFormFieldsUseCaseType) => {
  const validationResult = updateFormFieldsValidator({ fields });

  if (validationResult.error) {
    throw new BadRequestError(validationResult.error.message);
  }

  const form = await formRepository.findByFormId(formId);
  if (!form || form.userId?.toString() !== user.id?.toString()) {
    throw new NotFoundError(`no forms found with ${formId}`);
  }

  return formRepository.updateFormFieldsByFormId(formId, fields);
};
