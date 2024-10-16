import { LoadingButton } from "@mui/lab";
import createNewPalette from "../helpers/createNewPalette";
import { useContext, useRef } from "react";
import MainContext from "../context/mainContext";
import { TextField } from "@mui/material";

const CreateNewPalette = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { state, dispatch } = useContext(MainContext);
  return (
    <div className="container flex gap-5 flex-col !max-w-[250px] justify-center !mt-[20px]">
      <LoadingButton
        size="small"
        loading={state.createPaletteLoading}
        loadingPosition="center"
        variant="contained"
        onClick={() =>
          createNewPalette(state.paletts, dispatch, inputRef, state)
        }
      >
        create new template
      </LoadingButton>

      <TextField
        label={`${state.inputError ? "erorr" : ""}`}
        size="small"
        inputRef={inputRef}
        error={state.inputError}
        helperText={`${state.inputError ? "fill the input before submitting" : ""} `}
      />
    </div>
  );
};

export default CreateNewPalette;
