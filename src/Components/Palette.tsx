import { PaletteType } from "../types/types";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  CardHeader,
  IconButton,
} from "@mui/material";
import { useContext } from "react";
import { deletePalette } from "../services/services";
import { Delete } from "@mui/icons-material";
import MainContext from "../context/mainContext";

const Palette = ({
  paletteInfo,
  setModalStatus,
  setPaletteData,
}: {
  paletteInfo: PaletteType;
  setModalStatus: React.Dispatch<React.SetStateAction<boolean>>;
  setPaletteData: React.Dispatch<
    React.SetStateAction<{
      id: string;
      paletteName: string;
    }>
  >;
}) => {
  const { dispatch } = useContext(MainContext);
  return (
    <Card className="palette">
      <CardContent>
        <CardHeader
          action={
            <IconButton
              aria-label="settings"
              color="error"
              onClick={() => {
                setModalStatus((prev) => !prev);
                setPaletteData({
                  id: paletteInfo.id,
                  paletteName: paletteInfo.paletteName,
                });
              }}
            >
              <Delete />
            </IconButton>
          }
          title={paletteInfo.paletteName ?? ""}
        />
      </CardContent>
      <CardActions>
        <Button size="small">Edit Palette</Button>
      </CardActions>
    </Card>
  );
};

export default Palette;
