import React, { useState } from "react";
import { Link } from "gatsby";

const GlobalContext = React.createContext();
export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

const initialState = {
  step : 1,
  content :'',
  words : '',
  company : '',
  email : '',
  firstname : '',
  lastname : ''
}

function reducer(state, action){
  const { type, payload } = action;
  switch (type) {
        case 'NEXT_STEP':
                return {
                    ...state,
                    step: state.step + payload
                } 
        case 'PREV_STEP':
                return {
                    ...state,
                    step: state.step - payload
                } 
        case 'ADD_CONTENT':
            return {
                ...state,
                content: payload
            } 
        case 'ADD_WORDS':
          return {
              ...state,
              words: payload
          } 
        case 'ADD_COMPANY':
            return {
                ...state,
                company: payload
            } 
        case 'ADD_EMAIL':
            return {
                ...state,
                email: payload
            } 
        case 'ADD_FIRSTNAME':
            return {
                ...state,
                firstname: payload
            } 
        case 'ADD_LASTNAME':
            return {
                ...state,
                lastname: payload
            } 
            case 'RESET':
              return {
                  ...state,
                  step : 1,
                  content :'',
                  words : '',
                  company : '',
                  email : '',
                  firstname : '',
                  lastname : ''
              }
    default : 
      throw new Error('Bad Action Type')
  }
}

export const themeConfigDefault = {
  bodyDark: false,
  headerDark: false,
  footerDark: false,
  headerStyle: "style1", //style2, style3
  headerFluid: true,
  headerButton: (
    <>
      <Link to="/#" className="btn heading-default-color gr-hover-text-primary">
        + Submit New Job
      </Link>
    </>
  ),
  headerClassName: "site-header--menu-logo-middle",
  headerSocial: false,
  headerLogoClassName: "",
  footerStyle: "style1",
  footerClassName: "",
};

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const [theme, setTheme] = useState(themeConfigDefault);
  const [videoModalVisible, setVideoModalVisible] = useState(false);
  const [visibleOffCanvas, setVisibleOffCanvas] = useState(false);

  const changeTheme = (themeConfig = themeConfigDefault) => {
    setTheme({
      ...theme,
      ...themeConfig,
    });
  };

  const toggleVideoModal = () => {
    setVideoModalVisible(!videoModalVisible);
  };

  const toggleOffCanvas = () => {
    setVisibleOffCanvas(!visibleOffCanvas);
  };

  const closeOffCanvas = () => {
    setVisibleOffCanvas(false);
  };

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        <GlobalContext.Provider
          value={{
            theme,
            changeTheme,
            videoModalVisible,
            toggleVideoModal,
            visibleOffCanvas,
            toggleOffCanvas,
            closeOffCanvas,
          }}
        >
          {children}
        </GlobalContext.Provider>
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export default GlobalContext;
export { GlobalProvider };
