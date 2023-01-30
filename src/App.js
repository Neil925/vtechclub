import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/home";
import EminenceInShadow from "./pages/eminenceInShadow/eminenceInShadow";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/EminenceInShadow" element={<EminenceInShadow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
