import { Box, Button, Modal, Typography } from "@mui/material";
import { deletePalette } from "../services/services";
import { useContext } from "react";
import MainContext from "../context/mainContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  p: 4,
  borderRadius: 5,
};
const ConfirmationModal = ({
  openModal,
  setModalStatus,
  setPaletteData,
  paletteData,
}: {
  openModal: boolean;
  setModalStatus: React.Dispatch<React.SetStateAction<boolean>>;
  paletteData: { id: string; paletteName: string };
  setPaletteData: React.Dispatch<
    React.SetStateAction<{
      id: string;
      paletteName: string;
    }>
  >;
}) => {
  const { dispatch } = useContext(MainContext);
  /* Modal for delete palette confirmation */
  return (
    <Modal
      open={openModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography>
          Are you sure you want to delete the {paletteData.paletteName} palette?
        </Typography>
        <div className="button-wrapper flex justify-center gap-5 mt-5">
          <Button
            variant="contained"
            onClick={async () => {
              await deletePalette(paletteData.id ?? "");
              dispatch({ type: "forceRender" });
              setPaletteData({ id: "", paletteName: "" });
              setModalStatus((prev) => !prev);
            }}
          >
            YES
          </Button>
          <Button
            variant="contained"
            onClick={() => setModalStatus((prev) => !prev)}
          >
            NOPE
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default ConfirmationModal;
