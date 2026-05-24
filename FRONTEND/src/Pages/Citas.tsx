import { useReducer } from "react";

type Cita = {
  id: number;
  paciente: string;
};

function reducer(state: Cita[], action: any) {
  switch (action.type) {
    case "AGREGAR":
      return [...state, action.payload];
    case "ELIMINAR":
      return state.filter(c => c.id !== action.payload);
    default:
      return state;
  }
}

function Citas() {
  const [citas, dispatch] = useReducer(reducer, []);

  return (
    <div>
      <h1>Citas</h1>

      <button
        onClick={() =>
          dispatch({
            type: "AGREGAR",
            payload: { id: Date.now(), paciente: "Nuevo paciente" },
          })
        }
      >
        Agregar cita
      </button>

      <ul>
        {citas.map((c) => (
          <li key={c.id}>
            {c.paciente}
            <button onClick={() => dispatch({ type: "ELIMINAR", payload: c.id })}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Citas;

