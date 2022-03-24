import { Add_Loading, Add_Success, Get_Loading, Get_Success } from "./actionType";

export const AddLoading=()=>({
    type:Add_Loading
})

export const  AddSuccess=()=>({
    type:Add_Success
})

export const GetSuccess=(payload)=>({
    type:Get_Success,payload
})

export const GetLoading=()=>({
    type:Get_Loading
})