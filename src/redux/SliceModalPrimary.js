import { createSlice } from '@reduxjs/toolkit';

const modalSlicePrimary = createSlice({
  name: 'modalPrimary',
  initialState: {
    status: false
  },
  reducers: {
    openModalPrimary: (state,action) => ({ ...state, status: true,data:action.payload }),
    closeModalPrimary: (state) => ({ ...state, status: false })
  }
});

export const { openModalPrimary, closeModalPrimary } = modalSlicePrimary.actions;
export default modalSlicePrimary;
 