import { createContext } from "react";
import { PaletteType } from "../types/types";

interface MainContextType {
  createPaletteLoading: boolean;
  setCreatePaletteLoading: React.Dispatch<React.SetStateAction<boolean>>;
  paletts: PaletteType[];
  setPaletts: React.Dispatch<React.SetStateAction<PaletteType[]>>;
  setForceRender: React.Dispatch<React.SetStateAction<boolean>>;
}
const MainContext = createContext<MainContextType>({
  createPaletteLoading: false,
  setCreatePaletteLoading: () => {},
  paletts: [],
  setPaletts: () => {},
  setForceRender: () => {},
});

export default MainContext;
