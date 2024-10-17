import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getPalette } from "../services/services";
import { Button, List, ListItem, ListItemText, TextField } from "@mui/material";
import { PaletteType } from "../types/types";
import { ArrowBack } from "@mui/icons-material";
import Colors from "./Colors";

const EditPalette = () => {
  const { paletteId } = useParams();
  const [paletteInfo, setPaletteInfo] = useState<PaletteType>({
    paletteName: "",
    id: "",
    colors: [],
  });

  useEffect(() => {
    (async () => {
      const { data: paletteInfo } = await getPalette(paletteId ?? "");
      setPaletteInfo(paletteInfo);
    })();
  }, []);

  const navigate = useNavigate();
  return (
    <div className="grid place-items-center mt-10">
      <div className="container !max-w-[300px]">
        <List>
          <ListItem disablePadding>
            <ListItemText
              primary="Palette Fullname:"
              secondary={paletteInfo.paletteName}
            />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText
              primary="Colors:"
              secondary={<Colors colors={paletteInfo.colors} />}
            />
          </ListItem>
        </List>
        <div className="button-wrapper flex-col flex gap-2">
          <Button
            size="small"
            variant="contained"
            startIcon={<ArrowBack />}
            onClick={() => {
              navigate("/");
            }}
          >
            BACK
          </Button>
          <div className="new-color flex flex-col gap-2">
            <Button size="small" variant="contained">
              Add New Color
            </Button>
            <TextField
              size="small"
              label="enter your color"
              helperText="Hexadecimal, RGB and color"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPalette;
