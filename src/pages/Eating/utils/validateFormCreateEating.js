import Regex from '@Core/config/Regex';
import * as yup from 'yup';

const validateFormCreateEating = yup.object({
  cost: yup.string().matches(Regex.number, 'trường này phải là số').trim(),
  name: yup.string().required('trường bắt buộc').trim(),
  quantity: yup
    .string()
    .trim()
    .matches(Regex.number, 'trường này phải là số')
    .test('description', 'Nhập giá trị khác 0', (value) => {
      if (value === '0') {
        return false;
      }
      return true;
    }),
  price: yup
    .string()
    .trim()
    .matches(Regex.number, 'trường này phải là số')
    .test('description', 'Nhập giá trị khác 0', (value) => {
      if (value === '0') {
        return false;
      }
      return true;
    }),
  categoryId: yup
    .string()
    .required('trường bắt buộc')
    .trim()
    .test('category', 'vui lòng chọn khu vực', (value) => {
      if (value === 'null') {
        return false;
      } else {
        return true;
      }
    }),
  //   seat: yup.string().trim(),
  description: yup.string().trim()
});

export default validateFormCreateEating;
