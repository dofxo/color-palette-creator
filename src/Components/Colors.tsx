import { Alert } from "@mui/material";
import { Check } from "@mui/icons-material";
import { useState } from "react";

const Colors = ({ colors }: { colors: string[] }) => {
  return <>{colors?.map((color, id) => <Color key={id} color={color} />)}</>;
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
