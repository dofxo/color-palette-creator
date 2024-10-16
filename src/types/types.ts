export interface PaletteType {
  colors: string[];
  paletteName: string;
  id: string;
}

export interface StateType {
  paletts: PaletteType[];
  forceRender: boolean;
  createPaletteLoading: boolean;
}

export interface ActionType {
  type: "add" | "forceRender" | "createPaletteLoading";
  payLoad?: any;
}
