import { createPalette } from "../services/services";
import { PaletteType } from "../types/types";
import { v4 as uuidv4 } from "uuid";
import { ActionType } from "../types/types";

const createNewTemplate = async (
  paletts: PaletteType[],
  dispatch: React.Dispatch<ActionType>,
) => {
  try {
    dispatch({ type: "createPaletteLoading" });

    // create new palette number for palette default name
    const newPalettePosition = paletts.length + 1;

    const newPaletteInfo: PaletteType = {
      paletteName: `Palette ${newPalettePosition}`,
      colors: [],
      id: uuidv4(),
    };

    // create new palette
    await createPalette(newPaletteInfo);
    dispatch({ type: "createPaletteLoading" });

    // update pallets
    const updatedPallets = [...paletts, newPaletteInfo];
    dispatch({ type: "add", payLoad: updatedPallets });
  } catch (error) {
    console.error(error);
  }
};

export default createNewTemplate;
