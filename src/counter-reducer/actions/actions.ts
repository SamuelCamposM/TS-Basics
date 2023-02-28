export type CounterAction =
  | { type: "increaseBy"; payload: { value: number } }
  | { type: "reset" };

// export const doRoset = (): CounterAction => {
//   return {
//     type: "reset",
//   };
// };

export const doRoset = (): CounterAction => ({ type: "reset" });

export const doIncreaseBy = (value: number): CounterAction => ({
  type: "increaseBy",
  payload: { value },
});
