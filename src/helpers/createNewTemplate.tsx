import { createPalette } from "../services/services";
import { PaletteType } from "../types/types";
import { v4 as uuidv4 } from "uuid";

const createNewTemplate = async (
  setCreatePaletteLoading: React.Dispatch<React.SetStateAction<boolean>>,
  paletts: PaletteType[],
  setPallets: React.Dispatch<React.SetStateAction<PaletteType[]>>,
) => {
  try {
    setCreatePaletteLoading(true);

    // create new palette number for palette default name
    const newPalettePosition = paletts.length + 1;

    const newPaletteInfo: PaletteType = {
      paletteName: `Palette ${newPalettePosition}`,
      colors: [],
      id: uuidv4(),
    };

    // create new palette
    await createPalette(newPaletteInfo);
    setCreatePaletteLoading(false);

    // update pallets
    const updatedPallets = [...paletts, newPaletteInfo];
    setPallets(updatedPallets);
  } catch (error) {
    console.error(error);
  }
};

export default createNewTemplate;
