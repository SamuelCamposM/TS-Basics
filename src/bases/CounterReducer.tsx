import { useReducer } from "react";
import * as CounterActions from "../counter-reducer/actions/actions";
interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}
const INITIAL_STATE: CounterState = {
  counter: 10,
  previous: 15,
  changes: 20,
};

type CounterAction =
  | { type: "increaseBy"; payload: { value: number } }
  | { type: "reset" };
const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  const { counter, changes } = state;
  switch (action.type) {
    case "increaseBy":
      return {
        counter: counter + action.payload.value,
        previous: counter,
        changes: changes + 1,
      };
    case "reset":
      return {
        counter: 0,
        previous: 0,
        changes: 0,
      };

    default:
      return { ...state };
  }
};
export const CounterReducerComponent = () => {
  const [{ counter, changes, previous }, dispatch] = useReducer(
    counterReducer,
    INITIAL_STATE
  );

  const handleReset = () => {
    dispatch(CounterActions.doRoset());
  };
  const increaseBy = (value: number) => {
    dispatch(CounterActions.doIncreaseBy(value));
  };
  return (
    <>
      <h1>Counter: {counter}</h1>
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
