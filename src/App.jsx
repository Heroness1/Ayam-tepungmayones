import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApologyToDiah from "./ApologyToDiah";
import ForgivePage from "./ForgivePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ApologyToDiah />} />
        <Route path="/forgive" element={<ForgivePage />} />
      </Routes>
    </BrowserRouter>
  );
}
