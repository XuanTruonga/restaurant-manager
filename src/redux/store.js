import { configureStore } from '@reduxjs/toolkit';
import modalSlicePrimary from './SliceModalPrimary';
import modalSliceSecondary from './SliceModalSecondary';
import SliceModalDetail from './SliceModalDetail';
import SliceModalUpdate from './SliceModalUpdate';
import SliceAuth from './SliceAuth';

const store = configureStore({
  reducer: {
    modalPrimary: modalSlicePrimary.reducer,
    modalSecondary: modalSliceSecondary.reducer,
    modalDetail: SliceModalDetail.reducer,
    modalUpdate: SliceModalUpdate.reducer,
    auth: SliceAuth.reducer
  }
});
export default store;
