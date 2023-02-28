import { useReducer } from "react";
import { CounterAction } from "./actions/actions";
import { CounterState } from "./interfaces/interfaces";
import { counterReducer } from "./state/counterReducer";

const INITIAL_STATE: CounterState = {
  counter: 10,
  previous: 15,
  changes: 20,
};


export const CounterReducerComponent = () => {
  const [{ counter, changes, previous }, dispatch] = useReducer(
    counterReducer,
    INITIAL_STATE
  );

  const handleReset = () => {
    dispatch({ type: "reset" });
  };
  const increaseBy = (value: number) => {
    dispatch({ type: "increaseBy", payload: { value } });
  };
  return (
    <>
      <h1>Counter segmentado: {counter}</h1>
      <h1>Changes: {changes}</h1>
      <h1>Previous: {previous}</h1>
      <button
        onClick={() => {
          increaseBy(1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          increaseBy(5);
        }}
      >
        +5
      </button>
      <button
        onClick={() => {
          increaseBy(10);
        }}
      >
        +10
      </button>
      <button
        onClick={() => {
          handleReset();
        }}
      >
        Reset
      </button>
    </>
  );
};
