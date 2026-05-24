import { useState, useEffect } from "react";
import axios from "axios";
function ListaMedicos() {
  const [medicos, setMedicos] = useState<any[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/medicos")
      .then(res => setMedicos(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Lista de Médicos</h1>
      <ul>
        {medicos.map((m) => (
          <li key={m.id}>{m.nombre} - {m.especialidad}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaMedicos;
