import { createContext, useReducer } from "react";
import { counterReducer } from "../components/counterReducer";

export const CounterContext=createContext();

export const CounterProvider=({children})=>{
    const[state,dispatch]=useReducer(counterReducer,{count:0,error:""})

    return <CounterContext.Provider value={{state,dispatch}}>{children}</CounterContext.Provider>
}