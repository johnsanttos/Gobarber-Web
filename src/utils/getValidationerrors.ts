import { ValidationError } from 'yup';

type Errors = {
  [key: string]: string;
}

export const GetValidationErrors = (err: ValidationError): Errors => {
  const validationErrors: Errors = {};

  err.inner.forEach((error) => {
    validationErrors[error.path!] = error.message;
  });

  return validationErrors;
};
