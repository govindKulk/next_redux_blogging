/* Core */
import {
  configureStore,
  type ThunkAction,
  type Action,
} from "@reduxjs/toolkit";

import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
  type TypedUseSelectorHook,
} from "react-redux";

/* Instruments */
import { reducer } from "./rootReducer";
import { middleware } from "./middleware";


export const reduxStore = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(middleware);
  },
})


/* Types */
/*
  1. ReduxState: type of entire global stae
  2. ReduxDispatch: type of dispatch function
  3. ReduxThunkAction: type of thunk action creator function
  4. useDispatch: typed version of useDispatch according to our store
  5. useSelector: typed version of useSelector according to our store and state
*/

export type ReduxState = ReturnType<typeof reduxStore.getState>;
export type ReduxDispatch = typeof reduxStore.dispatch;
export type ReduxThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  Action
>


export const useDispatch = () => useReduxDispatch<ReduxDispatch>();
// export const useDispatch: () => ReduxDispatch = useReduxDispatch;
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;





