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
      <div className="flex flex-wrap justify-evenly gap-10">
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
