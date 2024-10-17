import { PaletteType } from "../types/types";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  CardHeader,
  IconButton,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Colors from "./Colors";

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
  const navigate = useNavigate();

  return (
    <Card className="palette flex flex-col justify-between">
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
        <Colors colors={paletteInfo.colors} />
      </CardContent>

      <CardActions className="flex justify-center">
        <Button
          className="w-full"
          size="small"
          variant="contained"
          onClick={() => {
            navigate(`/editPalette/${paletteInfo.id}`);
          }}
        >
          Edit Palette
        </Button>
      </CardActions>
    </Card>
  );
};

export default Palette;
