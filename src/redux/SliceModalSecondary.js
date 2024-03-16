import { createSlice } from '@reduxjs/toolkit';


const modalSliceSecondary = createSlice({
  name: 'modalSecondary',
  initialState: {
    status: false
  },
  reducers: {
    closeModalSecondary: (state) => {
      return { ...state, status: false };
    },
    openModalSecondary: (state,action) => {
      return { ...state, status: true,data:action.payload };
    }
  }
});

export const {closeModalSecondary, openModalSecondary} = modalSliceSecondary.actions
export default modalSliceSecondary