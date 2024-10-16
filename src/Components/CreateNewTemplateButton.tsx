import { LoadingButton } from "@mui/lab";
import createNewTemplate from "../helpers/createNewTemplate";
import { useContext } from "react";
import MainContext from "../context/mainContext";

const CreateNewTemplateButton = () => {
  const { createPaletteLoading, setCreatePaletteLoading, paletts, setPaletts } =
    useContext(MainContext);
  return (
    <div className="container flex justify-center !mt-[20px]">
      <LoadingButton
        loading={createPaletteLoading}
        loadingPosition="center"
        variant="contained"
        onClick={() =>
          createNewTemplate(setCreatePaletteLoading, paletts, setPaletts)
        }
      >
        create new template
      </LoadingButton>
    </div>
  );
};

export default CreateNewTemplateButton;
