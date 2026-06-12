import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Pokedex from "./pages/Pokedex/Pokedex";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pokedex" element={<Pokedex />} />
            <Route path="*" element={<NotFound />} />
      </Routes>
  
    </BrowserRouter>
  );
}

export default App;