"use client";
import { useState } from "react";

export default function Form() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState("");

  function calculaImc() {
    const alturaMetro = Number(altura) / 100;
    const total = (Number(peso) / (alturaMetro * alturaMetro)).toFixed(2);

    setImc(total);
  }

  return (
    <div>
      <label htmlFor="peso">Peso</label>
      <input
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        type="text"
        id="peso"
      />

      <label htmlFor="altura">Altura</label>
      <input
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        type="text"
        id="altura"
      />

      <button onClick={calculaImc}>Calcular</button>

      <div>
        IMC:
        <span>{imc}</span>
      </div>
    </div>
  );
}
