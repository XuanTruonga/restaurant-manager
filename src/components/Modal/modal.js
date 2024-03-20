import * as React from 'react';
import { modalSelectorDetail, modalSelectorPrimary, modalSelectorSecondary, modalSelectorUpdate } from '../../redux/selectors';
import { closeModalDetail } from '../../redux/SliceModalDetail';
import { useSelector } from 'react-redux';
import { closeModalPrimary } from '../../redux/SliceModalPrimary';
import { closeModalSecondary } from '../../redux/SliceModalSecondary';
import { closeModalUpdate } from '../../redux/SliceModalUpdate';
import BasicModal from './BasicModal';

export function BasicModalDetail(props) {
  const { title, width, children } = props;
  const { status } = useSelector(modalSelectorDetail);
  return (
    <div>
      <BasicModal status={status} title={title} width={width} closeModal={closeModalDetail} children={children} />
    </div>
  );
}

export function BasicModalPrimary(props) {
  const { title, width, children } = props;
  const { status } = useSelector(modalSelectorPrimary);
  return (
    <div>
      <BasicModal status={status} title={title} width={width} closeModal={closeModalPrimary} children={children} />
    </div>
  );
}

export function BasicModalSecondary(props) {
  const { title, width, children } = props;
  const { status } = useSelector(modalSelectorSecondary);
  return (
    <div>
      <BasicModal status={status} title={title} width={width} closeModal={closeModalSecondary} children={children} />
    </div>
  );
}

export function BasicModalUpdate(props) {
  const { title, width, children } = props;
  const { status } = useSelector(modalSelectorUpdate);
  return (
    <div>
      <BasicModal status={status} title={title} width={width} closeModal={closeModalUpdate} children={children} />
    </div>
  );
}
