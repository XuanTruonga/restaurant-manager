import { createSlice } from "@reduxjs/toolkit"

const SliceModalDetail = createSlice({
    name: 'modalDetail',
    initialState:{
        status: false
    },
    reducers:{
        closeModalDetail:(state)=>({...state,status:false}),
        openModalDetail:(state,action)=>({...state,status:true,data:action.payload})
    }
})

export const {closeModalDetail,openModalDetail} = SliceModalDetail.actions
export default SliceModalDetail 