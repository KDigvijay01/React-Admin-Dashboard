import React, { createContext, useContext, useState } from "react";

export const DataContext = createContext("");

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const handleActive = (value) => setActiveMenu(!activeMenu);
  const [isClicked, setIsClicked] = useState(initialState);
  const [currentColor, setCurrentColor] = useState("#03C907");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false)
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
    setThemeSettings(false)
  };

  const handleClick = (value) => {
    setIsClicked({ ...initialState, [value]: true });
  };

  const [screenSize, setScreenSize] = useState(undefined);
  return (
    <DataContext.Provider
      value={{
        activeMenu,
        handleActive,
        setActiveMenu,
        handleClick,
        isClicked,
        setIsClicked,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { ContextProvider };

export const useStateContext = () => useContext(DataContext);
