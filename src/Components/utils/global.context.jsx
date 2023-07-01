import axios from "axios";
import  { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react";

const ContextGlobal = createContext();

const initialDentistState = {
    dentistList: [],
    dentist: {},
    favs: JSON.parse(localStorage.getItem('favs')) || []
}

const initialThemeState = {
  theme: localStorage.getItem('theme')
}

const dentistReducer = (state, action) => {
    switch(action.type){
        case 'GET_LIST':
            return {...state, dentistList: action.payload }
        case 'GET_DENTIST': 
            return {...state, dentist: action.payload}
        case 'ADD_FAV':
            return {...state, favs: [...state.favs, action.payload]}
        default:
            throw new Error()
    }
}

    

const themeReducer = (state, action) => {
  switch(action.type){
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    default:
      throw new Error()
  }
}

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  //theme
  const [themeState, themeDispatch] = useReducer(themeReducer, initialThemeState);

  useEffect(() => {
    localStorage.setItem('theme', themeState.theme);
  }, [themeState.theme]);

  const changeTheme = () => {
    themeDispatch({ type: 'TOGGLE_THEME' });
  };

  //dentistStates
      const [dentistState, dentistDispatch] = useReducer(dentistReducer, initialDentistState)

      const urlDentists = "https://jsonplaceholder.typicode.com/users"

      useEffect(() => {
          axios(urlDentists)
          .then(res => dentistDispatch({type: "GET_LIST", payload: res.data }))
      }, [urlDentists])

      useEffect(() => {
          localStorage.setItem('favs', JSON.stringify(dentistState.favs))
      }, [dentistState.favs])

      
    const providerValue = useMemo(() => ({
      dentistState,
      dentistDispatch,
      themeState,
      changeTheme
    }), [dentistState, dentistDispatch, themeState, changeTheme]);

  return (
    <ContextGlobal.Provider value={providerValue}>
      {children}
    </ContextGlobal.Provider>
  );

};

export default ContextProvider;

export const Context = () => useContext(ContextGlobal)

