import { useContext, useState } from "react";
import Palette from "./Palette";
import MainContext from "../context/mainContext";
import ConfirmationModal from "./ConfirmationModal";

const Pallets = () => {
  const { state } = useContext(MainContext);
  const [openModal, setModalStatus] = useState(false);
  const [paletteData, setPaletteData] = useState({ id: "", paletteName: "" });

  return (
    <section className="flex justify-center mt-10 container">
      <div className="grid grid-cols-5 gap-5">
        {state.paletts?.map((palette, id) => (
          <Palette
            key={id}
            paletteInfo={palette}
            setModalStatus={setModalStatus}
            setPaletteData={setPaletteData}
          />
        ))}
        <ConfirmationModal
          openModal={openModal}
          setModalStatus={setModalStatus}
          setPaletteData={setPaletteData}
          paletteData={paletteData}
        />
      </div>
    </section>
  );
};

export default Pallets;
