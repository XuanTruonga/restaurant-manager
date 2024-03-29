/* eslint-disable default-case */
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastMessage = (status, string) => {
  switch (status) {
    case 'success':
      toast.success(string, {
        position: 'top-right'
      });
      break;
    case 'error':
      toast.error(string, {
        position: 'top-right'
      });
      break;
  }
};

export default ToastMessage;
