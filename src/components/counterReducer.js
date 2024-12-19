
export const counterReducer=(state,action)=>{
    switch(action.type){
        case "increment":
      if(state.count<10){
        return {
          count: state.count + 1,
          error:""
        };
      }else{
        return {
          error:"Increment Limit Reached",

        }
      };
    case "decrement":
      if(state.count>0){
        return {
          count: state.count - 1,
          error:""
        };
      }else{
        return {
          error:"Decrement Limit Reached",
        }
      };
      case "reset":
      return {
        count: 0,
      };
    case "increment_by":
    return{
        count:state.count + action.payload,
    };
    case "decrement_by":
      return {
        count: state.count - action.payload.count,
      };
    default:
      return state;
  }
};