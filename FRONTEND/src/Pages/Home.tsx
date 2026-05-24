import { useState } from "react";
function Home() {
  const [mensaje, setMensaje] = useState("Bienvenida a SaludGO");

  return (
    <div>
      <h1>{mensaje}</h1>
      <button onClick={() => setMensaje("Gracias por visitar la app")}>
        Cambiar mensaje
      </button>
    </div>
  );
}

export default Home;

