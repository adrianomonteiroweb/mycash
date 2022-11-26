import { BAD_REQUEST } from './httpStatusFunction';
import responseConstructor from './responseConstructor';

export default (body: object, schema: any) => {
  const { error } = schema.validate(body);

  if (error)
    return responseConstructor(
      BAD_REQUEST,
      'Error: username must be at least 3 characters, while password: minimum 8 characters, a number and a capital letter.'
    );

  return false;
};
