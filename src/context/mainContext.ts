import { createContext } from "react";
import { PaletteType, ActionType, StateType } from "../types/types";

interface MainContextType {
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}

const MainContext = createContext<MainContextType>({
  state: {
    forceRender: false,
    createPaletteLoading: false,
    paletts: [],
  },
  dispatch: () => {},
});

export default MainContext;
