/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState } from "react";

const RegisterStepsContext = createContext({});

export const RegisterStepsProvider = ({ children }) => {
  const [registerInfo, setRegisterInfo] = useState({
    email: "",
    phone: "",
    password: "",
    role: "user",

    workshopDetails: {
      workshopName: "",
      category: "",
      description: "",
      contactPhone: "",

      city: "",
      region: "",
      experienceYears: "",
      idPhoto: "",
    },

    userDetails: {
      fullName: "",
      userCity: "",
    },
  });

  return (
    <RegisterStepsContext.Provider value={{ registerInfo, setRegisterInfo }}>
      {children}
    </RegisterStepsContext.Provider>
  );
};

export const useRegisterStep = () => useContext(RegisterStepsContext);
