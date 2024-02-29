import * as yup from 'yup';
const validateFormLogin = yup.object({
  account: yup.string(),
  password: yup.string()
});

export default validateFormLogin;
