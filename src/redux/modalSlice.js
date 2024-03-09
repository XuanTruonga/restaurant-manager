import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    status: false
  },
  reducers: {
    openModal: (state) => ({ ...state, status: true }),
    closeModal: (state) => ({ ...state, status: false })
  }
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice;
