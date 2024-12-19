import React, { useContext } from "react";
import "./Counter.css";
import { CounterContext } from "../context/CounterContext";


export function Counter() {
 const {state,dispatch}=useContext(CounterContext);
 //console.log("....",state.count)

  return (
    <div className="counter-container">
      <h1>Counter:{state.count}</h1>
      {state.error && <p className="error">{state.error}</p>}
      <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
      <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
      <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
      <button onClick={()=>dispatch({type:"increment_by",payload:5})}>
        Increment By 5
      </button>
      <button
        onClick={()=>dispatch({type:"decrement_by",payload:{count:4}})}
      >
        Decrement By 4
      </button>
    </div>
  );
}
