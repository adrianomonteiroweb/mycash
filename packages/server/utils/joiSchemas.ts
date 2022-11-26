import joi from 'joi';

export const userSchema = joi.object({
  username: joi.string().min(3).required(),
  password: joi
    .string()
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z$*&@#]{8,}$/) // Regex for a minimum of 8 characters, 1 number and an uppercase letter.
    .required(),
});
