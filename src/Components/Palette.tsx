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

const Palette = ({ palleteInfo }: { palleteInfo: PaletteType }) => {
  const { dispatch } = useContext(MainContext);
  return (
    <Card className="palette">
      <CardContent>
        <CardHeader
          action={
            <IconButton
              aria-label="settings"
              color="error"
              onClick={async () => {
                await deletePalette(palleteInfo.id ?? "");
                dispatch({ type: "forceRender" });
              }}
            >
              <Delete />
            </IconButton>
          }
          title={palleteInfo.paletteName ?? ""}
        />
      </CardContent>
      <CardActions>
        <Button size="small">Edit Palette</Button>
      </CardActions>
    </Card>
  );
};

export default Palette;
