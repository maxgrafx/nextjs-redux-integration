import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
interface InitialState {
  foo: string;
  host: string;
}
const initialState: InitialState = {
  foo: "",
  host: ""
};

const reducer = (state: InitialState = initialState, action) => {
  switch (action.type) {
    case "FOO":
      return { ...state, foo: action.payload };
    case "HOST":
      return { ...state, host: action.payload.indexOf(":") ? action.payload.split(":")[0] : action.payload };
    default:
      return state;
  }
};
export interface StoreState {
  test: InitialState;
}

export const makeStore = (initialState, options) => {
  return createStore(
    combineReducers<StoreState>({ test: reducer }),
    initialState,
    composeWithDevTools()
  );
};
