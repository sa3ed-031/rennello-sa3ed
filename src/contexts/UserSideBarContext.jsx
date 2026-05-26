/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState } from "react";

const UserSideBarContext = createContext({});

export const UserSideBarProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <UserSideBarContext.Provider value={{ showSidebar, setShowSidebar }}>
      {children}
    </UserSideBarContext.Provider>
  );
};

export const useShowSidebar = () => useContext(UserSideBarContext);
