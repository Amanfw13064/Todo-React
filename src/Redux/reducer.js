import { Add_Loading, Add_Success, Get_Loading, Get_Success } from "./actionType";
const init={
    loading:false,
    todo:[]
}

export const reducer=(store=init,{type,payload})=>{
   switch(type){
      case Add_Loading:
          return {...store,loading:true}
          case Add_Success:
              return {...store,loading:false}
              case Get_Loading:
                  return {...store,loading:true}
                  case Get_Success:
                      return {...store,loading:false,todo:payload}
           default :
           return store
   }
} 