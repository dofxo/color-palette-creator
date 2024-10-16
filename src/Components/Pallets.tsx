import { useContext } from "react";
import Palette from "./Palette";
import MainContext from "../context/mainContext";

const Pallets = () => {
  const { state } = useContext(MainContext);

  return (
    <section className="flex justify-center mt-10">
      <div className="grid grid-cols-5 gap-5">
        {state.paletts?.map((palette, id) => (
          <Palette key={id} palleteInfo={palette} />
        ))}
      </div>
    </section>
  );
};

export default Pallets;
