/* Instruments */
import { counterSlice, postSlice } from "./slices";

export const reducer = {
  counter: counterSlice.reducer,
  post: postSlice.reducer
};
