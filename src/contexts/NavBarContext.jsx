/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState } from "react";

const NavBarContext = createContext({});

export const NavBarProvider = ({ children }) => {
  const [showNavLinks, setShowNavLinks] = useState(false);
  return (
    <NavBarContext.Provider value={{ showNavLinks, setShowNavLinks }}>
      {children}
    </NavBarContext.Provider>
  );
};

export const useShowNavbar = () => useContext(NavBarContext);
