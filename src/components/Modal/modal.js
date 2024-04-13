import * as React from 'react';
import { modalSelectorDetail, modalSelectorPrimary, modalSelectorSecondary, modalSelectorUpdate } from '../../redux/selectors';
import { closeModalDetail } from '../../redux/SliceModalDetail';
import { useSelector } from 'react-redux';
import { closeModalPrimary } from '../../redux/SliceModalPrimary';
import { closeModalSecondary } from '../../redux/SliceModalSecondary';
import { closeModalUpdate } from '../../redux/SliceModalUpdate';
import BasicModal from './BasicModal';
import useModal from 'components/Hook/useModal';

export function BasicModalDetail(props) {
  const { title, width, children, close } = props;
  const { status } = useSelector(modalSelectorDetail);
  const { offModalDetail } = useModal();

  return (
    <div>
      <BasicModal
        offModal={offModalDetail}
        status={status}
        title={title}
        close={close}
        width={width}
        closeModal={closeModalDetail}
        children={children}
      />
    </div>
  );
}

export function BasicModalPrimary(props) {
  const { title, width, children, close } = props;
  const { status } = useSelector(modalSelectorPrimary);
  const { offModalPrimary } = useModal();
  return (
    <div>
      <BasicModal
        status={status}
        title={title}
        offModal={offModalPrimary}
        close={close}
        width={width}
        closeModal={closeModalPrimary}
        children={children}
      />
    </div>
  );
}

export function BasicModalSecondary(props) {
  const { title, width, children, close } = props;
  const { status } = useSelector(modalSelectorSecondary);
  const { offModalSecondary } = useModal();

  return (
    <div>
      <BasicModal
        offModal={offModalSecondary}
        status={status}
        title={title}
        close={close}
        width={width}
        closeModal={closeModalSecondary}
        children={children}
      />
    </div>
  );
}

export function BasicModalUpdate(props) {
  const { offModalUpdate } = useModal();
  const { title, width, children, close } = props;
  const { status } = useSelector(modalSelectorUpdate);
  return (
    <div>
      <BasicModal
        offModal={offModalUpdate}
        status={status}
        title={title}
        close={close}
        width={width}
        closeModal={closeModalUpdate}
        children={children}
      />
    </div>
  );
}
