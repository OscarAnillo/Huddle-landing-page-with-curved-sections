import { HeaderComponent } from "./Components/header-component";
import { NumbersComponent } from "./Components/numbers-component";
import { TextComponent } from "./Components/text-component";
import { BuildCommunity } from "./Components/builld-community";

import "./App.css";
import { FooterComponent } from "./Components/footer-component";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <NumbersComponent />
      <TextComponent />
      <BuildCommunity />
      <FooterComponent />
    </div>
  );
}

export default App;
