import { useDispatch, useSelector } from 'react-redux';
import { closeModalDetail } from '../../redux/SliceModalDetail';
import { modalSelectorDetail, modalSelectorPrimary, modalSelectorSecondary, modalSelectorUpdate } from '../../redux/selectors';
import { closeModalPrimary, openModalPrimary } from '../../redux/SliceModalPrimary';
import { closeModalSecondary, openModalSecondary } from '../../redux/SliceModalSecondary';
import { closeModalUpdate, openModalUpdate } from '../../redux/SliceModalUpdate';
import { openModalDetail } from '../../redux/SliceModalDetail';

const useModal = () => {
  const dispath = useDispatch();
  const { data: dataModalDetail } = useSelector(modalSelectorDetail);
  const { data: dataModalPrimary } = useSelector(modalSelectorPrimary);
  const { data: dataModalSecondary } = useSelector(modalSelectorSecondary);
  const { data: dataModalUpdate } = useSelector(modalSelectorUpdate);

  const offModalDetail = () => dispath(closeModalDetail());
  const offModalPrimary = () => dispath(closeModalPrimary());
  const offModalSecondary = () => dispath(closeModalSecondary());
  const offModalUpdate = () => dispath(closeModalUpdate());

  const onModalDetail = (payload) => dispath(openModalDetail(payload));
  const onModalUpdate = (payload) => dispath(openModalUpdate(payload));
  const onModalPrimary = (payload) => dispath(openModalPrimary(payload));
  const onModalSecondary = (payload) => dispath(openModalSecondary(payload));
  return {
    dataModalDetail,
    dataModalPrimary,
    dataModalSecondary,
    dataModalUpdate,
    offModalDetail,
    offModalPrimary,
    offModalSecondary,
    offModalUpdate,
    onModalUpdate,
    onModalDetail,
    onModalSecondary,
    onModalPrimary
  };
};

export default useModal;
