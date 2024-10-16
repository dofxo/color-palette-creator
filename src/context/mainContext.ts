import { createContext } from "react";
import { ActionType, StateType } from "../types/types";

interface MainContextType {
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}

const MainContext = createContext<MainContextType>({
  state: {
    forceRender: false,
    createPaletteLoading: false,
    paletts: [],
    inputError: false,
  },
  dispatch: () => {},
});

export default MainContext;
