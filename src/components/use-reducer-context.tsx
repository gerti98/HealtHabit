
import React, { createContext, useReducer, Dispatch } from "react";

export interface userInterface {
    nome: string,
    email: string,
    img: string,
    isLoggin: boolean
}


export type Actions = "login";

interface MyContext {
  dispatch: Function,
  state: userInterface,
}

let AppContext = createContext<MyContext>({} as MyContext);

const initialState = {
    nome: '',
    email:'',
    img: '',
    isLoggin: false
}

let reducer = (state:userInterface, action:any) => {
  console.log(action)
  switch(action.type) {
    case "login": {
      return { ...state, nome: action.nome, email: action.email, img: action.img, isLoggin: action.isLoggin }
    }
  }
  return state;
};

function AppContextProvider(props:any) {
  const fullInitialState = {
    ...initialState,
  }

  let [state, dispatch] = useReducer(reducer, fullInitialState);
  let value = { state, dispatch };


  return (
    <AppContext.Provider value={value }>{props.children}</AppContext.Provider>
  );
}

let AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };