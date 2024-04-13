import { useDispatch, useSelector } from 'react-redux';
import { actionLogout, actionSetUserCur, getCurrentUser } from '../../redux/SliceAuth';

const UseAuth = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.auth);
  const getUser = () => {
    dispatch(getCurrentUser());
  };
  const setUser = (data) => {
    dispatch(actionSetUserCur(data));
  };
  const logout = () => {
    dispatch(actionLogout());
  };
  return {
    ...state,
    getUser,
    setUser,
    logout
  };
};

export default UseAuth;
