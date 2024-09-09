import "./App.css";
import { Input } from "./UI/Forms/Input/Input";

function App() {
  return (
    <>
      <Input
        type="text"
        label="Label lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        infoIconText="Info text Label lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et"
        helperText="Label lorem ipsum dolor sit amet consectetur adipiscing elit sed "
        size="extra_small"
      />
    </>
  );
}

export default App;
