

const initState={
    data:[]


}
export const reducer=(state=initState,{type,payload})=>{
   switch(type){
   case "GetData":{
    return{
       ...state,data:payload
    }
   }
    default:{
        return state
    }
   }
}