import { getPalettesList, createPalette } from "../services/services";
import { PaletteType } from "../types/types";

const createNewTemplate = async (
  setCreatePaletteLoading: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  try {
    setCreatePaletteLoading(true);
    const { data: palettes } = await getPalettesList();

    // create new palette number for palette default name
    const newPalettePosition = palettes.length + 1;

    const newPaletteInfo: PaletteType = {
      paletteName: `Palette ${newPalettePosition}`,
      colors: [],
    };

    // create new palette
    await createPalette(newPaletteInfo);
    setCreatePaletteLoading(false);
  } catch (error) {
    console.error(error);
  }
};

export default createNewTemplate;
