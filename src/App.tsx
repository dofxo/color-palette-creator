import MainContext from "./context/mainContext";
import { useEffect, useReducer } from "react";
import { Routes, Route } from "react-router-dom";

import { CreateNewPalette, EditPalette, Pallets } from "./components";
import { getPalettesList } from "./services/services";
import { ActionType, StateType } from "./types/types";

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        paletts: action.payLoad,
      };

    case "forceRender":
      return { ...state, forceRender: !state.forceRender };

    case "createPaletteLoading":
      return { ...state, createPaletteLoading: !state.createPaletteLoading };

    case "inputErrorTrue":
      return { ...state, inputError: true };

    case "inputErrorFalse":
      return { ...state, inputError: false };

    default:
      return state;
  }
};

const App = () => {
  const initialState: StateType = {
    paletts: [],
    forceRender: false,
    createPaletteLoading: false,
    inputError: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // get pallets from server
  useEffect(() => {
    (async () => {
      try {
        const { data: pallets } = await getPalettesList();

        dispatch({ type: "add", payLoad: pallets });
      } catch (error) {
        console.error(error);
      }
    })();
  }, [state.forceRender]);

  return (
    <MainContext.Provider
      value={{
        state: state,
        dispatch,
      }}
    >
      <main className="grid gap-[25px]">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <CreateNewPalette />
                <Pallets />
              </>
            }
          />
          <Route path="/editPalette/:paletteId" element={<EditPalette />} />
          <Route path="*" element={<h2>Not Found</h2>} />
        </Routes>
      </main>
    </MainContext.Provider>
  );
};

export default App;
