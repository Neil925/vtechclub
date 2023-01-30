import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigate from "./components/navigate/navigate";
import Home from "./pages/home/home";
import EminenceInShadow from "./pages/eminenceInShadow/eminenceInShadow";
import Test from "./pages/test/test";

function App() {
  return (
    <BrowserRouter>
      <Navigate />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/EminenceInShadow" element={<EminenceInShadow />} />
        <Route index path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
