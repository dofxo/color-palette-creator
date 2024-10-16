import MainContext from "./context/mainContext";
import { useState } from "react";
import CreateNewTemplateButton from "./Components/CreateNewTemplateButton";

const App = () => {
  const [createPaletteLoading, setCreatePaletteLoading] =
    useState<boolean>(false);

  return (
    <MainContext.Provider
      value={{ createPaletteLoading, setCreatePaletteLoading }}
    >
      <main className="grid gap-[25px]">
        <CreateNewTemplateButton />
      </main>
    </MainContext.Provider>
  );
};

export default App;
