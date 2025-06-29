import { useEffect, useState } from "react";
import runSimulation from "./utils/runSimulation";

type Result = { x: number; y: number; dir: "N" | "E" | "S" | "W" };

function App() {
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    //Ajout du fichier dans public/, car le fetch récupérait la page HTML par défaut et renvoyé une erreur <!doctype html>).
    //J'ai laissé instructions.txt dans le dossier instructions pour les tests
    fetch("./instructions_real.txt")
      .then((res) => res.text())
      .then((text) => text.trim().split("\n"))
      .then((lines) => {
        const output = runSimulation(lines);
        setResults(output);
      })
      .catch(console.error);
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "rgba(20, 233, 63, 0.57)",
      }}
    >
      <h1
        style={{
          fontSize: "2.25rem",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        Résultats de la simulation
      </h1>
      {results.length === 0 ? (
        <p>Chargement en cours…</p>
      ) : (
        <div>
          {results.map((r, i) => (
            <div key={i} style={{ marginBottom: "0.5rem" }}>
              <span style={{ fontWeight: "600" }}>
                Pour la tondeuse {i + 1} :
              </span>{" "}
              [{r.x}, {r.y}] direction {r.dir}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
