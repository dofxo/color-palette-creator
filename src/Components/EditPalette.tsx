import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addColorToPalette, getPalette } from "../services/services";
import { Button, List, ListItem, ListItemText, TextField } from "@mui/material";
import { PaletteType } from "../types/types";
import { ArrowBack } from "@mui/icons-material";
import Colors from "./Colors";

const EditPalette = () => {
  const { paletteId } = useParams();
  const [inputError, setErrorStatus] = useState(false);
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

  const inputRef = useRef<null | HTMLInputElement>(null);
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
            <Button
              onClick={async () => {
                const inputValue = inputRef.current && inputRef.current.value;
                try {
                  if (!inputValue) {
                    setErrorStatus(true);

                    setTimeout(() => {
                      setErrorStatus(false);
                    }, 1200);
                    return;
                  } else {
                    const updatedColorsArray = [
                      ...paletteInfo.colors,
                      inputValue,
                    ];
                    const updatedPaletteInfo = {
                      ...paletteInfo,
                      colors: updatedColorsArray,
                    };

                    // update server data
                    await addColorToPalette(paletteInfo.id, updatedPaletteInfo);

                    // update state
                    setPaletteInfo(updatedPaletteInfo);

                    if (inputRef.current) inputRef.current.value = "";
                  }
                } catch (error) {
                  console.log(error);
                }
              }}
              size="small"
              variant="contained"
            >
              Add New Color
            </Button>
            <TextField
              error={inputError}
              size="small"
              label="enter your color"
              helperText="Hexadecimal, RGB and color"
              inputRef={inputRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPalette;
