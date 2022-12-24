import "./sass/main.scss";

import Landing from "./pages/Landing/Landing";
import Menu from "./pages/Menú/Menu";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Menu />
    </div>
  );
}

export default App;
