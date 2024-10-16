import { createContext } from "react";

interface MainContextType {
  createPaletteLoading: boolean;
  setCreatePaletteLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
const MainContext = createContext<MainContextType>({
  createPaletteLoading: false,
  setCreatePaletteLoading: () => {},
});

export default MainContext;
