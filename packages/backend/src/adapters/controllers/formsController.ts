import { NextFunction, Request, Response } from "express";

import { FormDbRepositoryType } from "../../application/repositories/formDbRepository";
import { FormDbRepositoryImplType } from "../../frameworks/database/mongodb/repositories/formDbRepositoryImpl";
import { createFormUseCase } from "../../application/use_cases/form/createFormUseCase";
import { HttpStatus } from "../../core/enums/httpStatus";
import { updateFormFieldsUseCase } from "../../application/use_cases/form/updateFormFieldsUseCase";

const formsController = (
  formDbRepository: FormDbRepositoryType,
  formDbRepositoryImpl: FormDbRepositoryImplType
) => {
  const dbRepository = formDbRepository(formDbRepositoryImpl());
  // const cachingRepository = postCachingRepository(postCachingRepositoryImpl()(cachingClient));

  const addNewForm = (req: Request, res: Response, next: NextFunction) => {
    const { formName } = req.body;

    createFormUseCase({ formName, formRepository: dbRepository })
      .then((newForm) => {
        return res.status(HttpStatus.CREATED).json(newForm);
      })
      .catch((error: Error) => next(error));
  };

  const updateFormFields = (req: Request, res: Response, next: NextFunction) => {
    const { formId } = req.params;
    const { fields } = req.body;

    updateFormFieldsUseCase({ formId, fields, formRepository: dbRepository })
      .then((updatedForm) => {
        return res.status(HttpStatus.OK).json({ message: "Ok", data: updatedForm });
      })
      .catch((error: Error) => next(error));
  };

  const getSingleForm = (req: Request, res: Response, next: NextFunction) => {
    res.status(HttpStatus.OK).json({ message: "Hello Nihal, This is working" });
  };

  return { addNewForm, updateFormFields, getSingleForm };
};

export default formsController;
