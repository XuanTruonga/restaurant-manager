import ToastMessage from 'components/Basic/ToastMessage';
import diningRoomService from 'services/diningRoomService';

export const handleUpdateDiningRoom = (onModalUpdate, offModalDetail, dataModalDetail) => {
  onModalUpdate(dataModalDetail);
  offModalDetail();
};

export const handleDisabledDinningRoom = async (dataModalDetail, offModalDetail) => {
  const newDataDiningRoom = { status: 'IDLE', note: dataModalDetail.note, seat: dataModalDetail.seat, name: dataModalDetail.name };
  try {
    await diningRoomService.edit(dataModalDetail.id, newDataDiningRoom);
    ToastMessage('success', 'Ngưng hoạt động phòng/bàn thành công.');
    offModalDetail();
    // callApi();
  } catch (error) {
    ToastMessage('error', 'Mở hoạt động phòng/bàn thất bại.');
  }
};

export const handleActiveDinningRoom = async (dataModalDetail, offModalDetail) => {
  const newDataDiningRoom = { status: null, note: dataModalDetail.note, seat: dataModalDetail.seat, name: dataModalDetail.name };
  try {
    await diningRoomService.edit(dataModalDetail.id, newDataDiningRoom);
    ToastMessage('success', 'Cho phép hoạt động phòng/bàn thành công.');
    offModalDetail();
    // callApi();
  } catch (error) {
    ToastMessage('error', 'Cho hoạt động phòng/bàn thất bại.');
  }
};

export const handleDeleteDiningRoom = async (dataModalDetail, offModalDetail) => {
  try {
    await diningRoomService.remove(dataModalDetail.id);
    // callApi();
    ToastMessage('success', 'Xóa phòng bàn thành công');
    offModalDetail();
  } catch (error) {
    ToastMessage('error', 'Xóa phòng bàn thất bại');
  }
};

export const onSubmitUpdateDiningRoom = async (valueForm, dataModalUpdate, offModalUpdate) => {
  const newDataDiningRoom = { ...valueForm, areaId: dataModalUpdate.areaId };
  console.log(newDataDiningRoom);
  try {
    await diningRoomService.edit(dataModalUpdate.id, newDataDiningRoom);
    ToastMessage('success', 'Cập nhập phòng/bàn thành công.');
    offModalUpdate();
  } catch (error) {
    ToastMessage('error', 'Cập nhập phòng/bàn thất bại.');
  }
};
