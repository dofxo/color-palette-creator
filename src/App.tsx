import { Button } from "@mui/material";
import createNewTemplate from "./helpers/createNewTemplate";

const App = () => {
  return (
    <main className="grid gap-[25px]">
      <div className="container flex justify-center !mt-[20px]">
        <Button variant="contained" onClick={createNewTemplate}>
          add new template
        </Button>
      </div>
    </main>
  );
};

export default App;
