export interface PaletteType {
  colors: string[];
  paletteName: string;
  id: string;
}

export interface StateType {
  paletts: PaletteType[];
  forceRender: boolean;
  createPaletteLoading: boolean;
  inputError: boolean;
}

export interface ActionType {
  type:
    | "add"
    | "forceRender"
    | "createPaletteLoading"
    | "inputErrorFalse"
    | "inputErrorTrue";
  payLoad?: any;
}
