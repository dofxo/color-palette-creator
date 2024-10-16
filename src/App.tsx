import { LoadingButton } from "@mui/lab";

import createNewTemplate from "./helpers/createNewTemplate";
import MainContext from "./context/mainContext";
import { useState } from "react";

const App = () => {
  const [createPaletteLoading, setCreatePaletteLoading] =
    useState<boolean>(false);

  return (
    <MainContext.Provider value={{}}>
      <main className="grid gap-[25px]">
        <div className="container flex justify-center !mt-[20px]">
          <LoadingButton
            loading={createPaletteLoading}
            loadingPosition="center"
            variant="contained"
            onClick={() => createNewTemplate(setCreatePaletteLoading)}
          >
            add new template
          </LoadingButton>
        </div>
      </main>
    </MainContext.Provider>
  );
};

export default App;
