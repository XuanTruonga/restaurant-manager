import * as yup from 'yup';

const validateFormCreateDiningRoom = yup.object({
  diningRoom: yup.string().required('trường bắt buộc').trim(),
  area: yup.string().trim(),
  quantitySeats: yup.string().trim(),
  note: yup.string().trim()
});

export default validateFormCreateDiningRoom;
