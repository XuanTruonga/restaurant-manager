import * as yup from 'yup';

const validateFormCreateDiningRoom = yup.object({
  name: yup.string().required('trường bắt buộc').trim(),
  areaId: yup.string().required('trường bắt buộc').trim(),
  seat: yup.string().trim(),
  note: yup.string().trim()
});

export default validateFormCreateDiningRoom;
