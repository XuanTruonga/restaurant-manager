import { createSlice } from '@reduxjs/toolkit';

const SliceModalUpdate = createSlice({
  name: 'modalSecondary',
  initialState: {
    status: false
  },
  reducers: {
    closeModalUpdate: (state) => {
      return { ...state, status: false };
    },
    openModalUpdate: (state, action) => {
      return { ...state, status: true, data: action.payload };
    }
  }
});

export const { closeModalUpdate, openModalUpdate } = SliceModalUpdate.actions;
export default SliceModalUpdate;
