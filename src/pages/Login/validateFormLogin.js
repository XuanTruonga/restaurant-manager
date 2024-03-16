import * as yup from 'yup';
const validateFormLogin = yup.object({
  account: yup.string().trim(),
  password: yup.string().trim()
});

export default validateFormLogin;
