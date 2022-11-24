import { HeaderComponent } from "./Components/header-component";
import { NumbersComponent } from "./Components/numbers-component";
import { TextComponent } from "./Components/text-component";
import { BuildCommunity } from "./Components/builld-community";

import "./App.css";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <NumbersComponent />
      <TextComponent />
      <BuildCommunity />
    </div>
  );
}

export default App;
