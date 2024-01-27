import Joi from "joi";

export const createFormValidator = (data: any) => {
  const schema = Joi.object({
    formName: Joi.string().required(),
  });

  return schema.validate(data);
};

export const updateFormFieldsValidator = (data: any) => {
  const schema = Joi.object({
    fields: Joi.array()
      .items({
        label: Joi.string().allow("", null),
        ref: Joi.string().required(),
        validations: Joi.object({
          required: Joi.boolean().required(),
        }).required(),
        fieldType: Joi.string().required(),
      })
      .required(),
  });

  return schema.validate(data);
};
