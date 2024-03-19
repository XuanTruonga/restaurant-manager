import Regex from '@Core/config/Regex';
import * as yup from 'yup';

const validateFormRegister = yup.object({
  name: yup.string().min(5, 'tối thiểu là 5 ký tự').trim(),
  phone: yup.string().required('trường bắt buộc').matches(Regex.phoneVn, 'không đúng định dạng').trim(),
  province: yup.string().required('trường bắt buộc'),
  username: yup.string().required('trường bắt buộc').min(8, 'tối thiểu 8 ký tự').trim(),
  policy: yup
    .string()
    .required('vui lòng đọc điều khoản sử dụng')
    .test('isds', 'vui lòng đọc điều khoản sử dụng', (value) => {
      if (value === 'true') {
        return true;
      } else {
        return false;
      }
    }),
  password: yup
    .string()
    .required('trường bắt buộc')
    .trim()
    .matches(Regex.password, 'Mật khẩu tối thiểu 8 ký tự bao gồm chữ in hoa, chữ thường và số')
});
export default validateFormRegister;
