import { useState } from "react";
import ApologyToDiah from "./ApologyToDiah";
import ForgivePage from "./ForgivePage";

export default function App() {
  const [isForgiven, setIsForgiven] = useState(false);

  return (
    <>
      {!isForgiven ? (
        <ApologyToDiah onForgive={() => setIsForgiven(true)} />
      ) : (
        <ForgivePage />
      )}
    </>
  );
}
