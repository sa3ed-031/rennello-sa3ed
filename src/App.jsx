import { AnimatePresence } from "framer-motion";

import { NavBarProvider } from "./contexts/NavBarContext";
import AppRouter from "./router/AppRouter";
import { RegisterStepsProvider } from "./contexts/RegisterStepsContext";
import { UserSideBarProvider } from "./contexts/UserSideBarContext";

function App() {
  return (
    <AnimatePresence mode="wait">
      <NavBarProvider>
        <RegisterStepsProvider>
          <UserSideBarProvider>
            <AppRouter />
          </UserSideBarProvider>
        </RegisterStepsProvider>
      </NavBarProvider>
    </AnimatePresence>
  );
}

export default App;
