import { createContext } from "react";

interface MainContextType {}
const MainContext = createContext<MainContextType>({});

export default MainContext;
