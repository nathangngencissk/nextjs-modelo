import React from "react";
import { ActionTypes } from './ActionTypes'

export const Store = React.createContext();

const InitialState = {
  count: 1
};

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENTAR:
      return Object.assign({}, state, {
        count: state.count + 1
      });
    case ActionTypes.DECREMENTAR:
      if(state.count == 1) {
          return state;
      } else {
        return Object.assign({}, state, {
            count: state.count - 1
          });
      }    
    default:
      return state;
  }
};

export const StoreProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, InitialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};
