import { ADD_TO_CART , REMOVE_FROM_CART,GET_ALL_USERS} from "./constants";
const initialState = [];
export const reducer =(state = initialState, action)=>{
 switch(action.type){
  case ADD_TO_CART: 
   return [...state, action.data ]
   case REMOVE_FROM_CART: 
   console.log("action",action.data)
    let result = state.filter((item)=>{
     return item.name !== action.data
    })
   return [...result]
   case GET_ALL_USERS :
    console.log("reducer",action)
    return [...state,action.data]
  default :
    return state
 }
}
