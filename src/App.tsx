import MainContext from "./context/mainContext";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { CreateNewTemplateButton, Pallets } from "./components";
import { PaletteType } from "./types/types";
import { getPalettesList } from "./services/services";

const App = () => {
  const [createPaletteLoading, setCreatePaletteLoading] =
    useState<boolean>(false);
  const [paletts, setPaletts] = useState<PaletteType[]>([]);
  const [forceRender, setForceRender] = useState(false);

  // get pallets from server
  useEffect(() => {
    (async () => {
      try {
        const { data: pallets } = await getPalettesList();

        setPaletts(pallets);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [forceRender]);

  return (
    <MainContext.Provider
      value={{
        createPaletteLoading,
        setCreatePaletteLoading,
        paletts,
        setPaletts,
        setForceRender,
      }}
    >
      <main className="grid gap-[25px]">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <CreateNewTemplateButton />
                <Pallets />
              </>
            }
          />
          <Route path="*" element={<h2>Not Found</h2>} />
        </Routes>
      </main>
    </MainContext.Provider>
  );
};

export default App;
