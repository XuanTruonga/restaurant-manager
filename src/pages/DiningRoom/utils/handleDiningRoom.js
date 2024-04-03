/* eslint-disable react-hooks/rules-of-hooks */
import ToastMessage from 'components/Basic/ToastMessage';
import diningRoomService from 'services/diningRoomService';

export const handleUpdateDiningRoom = (onModalUpdate, offModalDetail, dataModalDetail) => {
  onModalUpdate(dataModalDetail);
  offModalDetail();
};

export const handleDeleteDiningRoom = async (dataModalDetail, offModalDetail, refetchApiDiningRoom) => {
  try {
    await diningRoomService.remove(dataModalDetail.id);
    ToastMessage('success', 'Xóa phòng bàn thành công');
    offModalDetail();
    refetchApiDiningRoom();
  } catch (error) {
    ToastMessage('error', 'Xóa phòng bàn thất bại');
  }
};
