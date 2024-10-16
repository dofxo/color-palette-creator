import { createPalette } from "../services/services";
import { PaletteType, StateType } from "../types/types";
import { v4 as uuidv4 } from "uuid";
import { ActionType } from "../types/types";

const createNewPalette = async (
  paletts: PaletteType[],
  dispatch: React.Dispatch<ActionType>,
  inputRef: any,
  state: StateType,
) => {
  try {
    dispatch({ type: "createPaletteLoading" });

    // create new palette number for palette name and restart the input
    if (!inputRef.current.value) {
      dispatch({ type: "createPaletteLoading" });
      dispatch({ type: "inputErrorTrue" });
      return;
    } else {
      const palletteName = inputRef?.current.value;
      if (inputRef.current) inputRef.current.value = "";

      const newPaletteInfo: PaletteType = {
        paletteName: palletteName,
        colors: [],
        id: uuidv4(),
      };

      // create new palette
      await createPalette(newPaletteInfo);
      dispatch({ type: "createPaletteLoading" });

      // update pallets
      const updatedPallets = [...paletts, newPaletteInfo];
      dispatch({ type: "add", payLoad: updatedPallets });
      if (state.inputError) dispatch({ type: "inputErrorFalse" });
    }
  } catch (error) {
    console.error(error);
  }
};

export default createNewPalette;
