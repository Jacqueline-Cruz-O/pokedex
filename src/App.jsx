import { HashRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Pokedex from "./pages/Pokedex/Pokedex";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;