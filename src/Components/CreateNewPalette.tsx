import { LoadingButton } from "@mui/lab";
import createNewPalette from "../helpers/createNewPalette";
import { useContext, useRef } from "react";
import MainContext from "../context/mainContext";
import { TextField } from "@mui/material";

const CreateNewPalette = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { state, dispatch } = useContext(MainContext);
  return (
    <div className="container flex flex-col gap-2 !max-w-[200px] justify-center !mt-[20px]">
      <TextField size="small" inputRef={inputRef} />
      <LoadingButton
        size="small"
        loading={state.createPaletteLoading}
        loadingPosition="center"
        variant="contained"
        onClick={() => createNewPalette(state.paletts, dispatch, inputRef)}
      >
        create new template
      </LoadingButton>
    </div>
  );
};

export default CreateNewPalette;
