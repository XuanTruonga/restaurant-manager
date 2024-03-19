import * as yup from 'yup';
const validateFormLogin = yup.object({
  password: yup.string().trim(),
  username: yup.string().trim()
});

export default validateFormLogin;
