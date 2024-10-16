import { Alert } from "@mui/material";
import { Check, Delete } from "@mui/icons-material";
import { useContext, useState } from "react";
import { PaletteType } from "../types/types";
import { removeColor } from "../services/services";
import MainContext from "../context/mainContext";

const Colors = ({
  colors,
  paletteInfo,
  setPaletteInfo,
  isInEdit = false,
}: {
  colors: string[];
  paletteInfo?: PaletteType;
  setPaletteInfo?: React.Dispatch<React.SetStateAction<PaletteType>>;
  isInEdit?: boolean;
}) => {
  const { dispatch } = useContext(MainContext);

  return (
    <>
      {colors?.map((color, id) => (
        <span key={id} className="flex items-center">
          <Color color={color} />
          {isInEdit && (
            <Delete
              className="text-red-600 cursor-pointer"
              // remove color from color palette
              onClick={() => {
                if (!(paletteInfo && setPaletteInfo)) return;

                const updatedPaletteInfoColors = [...paletteInfo.colors];

                updatedPaletteInfoColors.splice(id, 1);

                const updatedPaletteInfo = {
                  ...paletteInfo,
                  colors: updatedPaletteInfoColors,
                };

                setPaletteInfo(updatedPaletteInfo);
                removeColor(paletteInfo.id, updatedPaletteInfo);
                dispatch({ type: "forceRender" });
              }}
            />
          )}
        </span>
      ))}
    </>
  );
};

const Color = ({ color }: { color: string }) => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <span
      onClick={() => {
        navigator.clipboard.writeText(color);
        setShowAlert(true);

        setTimeout(() => {
          setShowAlert(false);
        }, 1000);
      }}
      className="colors active:scale-90 transition h-10 w-full rounded flex justify-center items-center m-0.5 border shadow cursor-pointer"
      style={{ backgroundColor: color }}
    >
      {showAlert && (
        <Alert icon={<Check fontSize="inherit" />} severity="success">
          copied to clipboard!
        </Alert>
      )}
    </span>
  );
};
export default Colors;
