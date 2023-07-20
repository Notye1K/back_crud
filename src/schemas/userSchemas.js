import joi from "joi";

const userPostSchema = joi.object({
  email: joi.string().email().required(),
  name: joi.string().required(),
  phone: joi.string().required(),
  company: joi.string().required(),
  registration: joi.string().required(),
});

const userPatchSchema = joi.object({
  email: joi.string().email(),
  name: joi.string(),
  phone: joi.string(),
  company: joi.string(),
  registration: joi.string(),
});

export { userPostSchema, userPatchSchema };
