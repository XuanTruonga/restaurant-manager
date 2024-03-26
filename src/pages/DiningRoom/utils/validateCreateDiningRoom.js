import * as yup from 'yup';

const validateFormCreateDiningRoom = yup.object({
  name: yup.string().required('trường bắt buộc').trim(),
  areaId: yup
    .string()
    .required('trường bắt buộc')
    .trim()
    .test('area', 'vui lòng chọn khu vực', (value) => {
      if (value === 'null') {
        return false;
      } else {
        return true;
      }
    }),
  seat: yup.string().trim(),
  note: yup.string().trim()
});

export default validateFormCreateDiningRoom;
