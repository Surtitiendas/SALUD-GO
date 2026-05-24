import { createContext, useState } from "react";

export const AppContext = createContext<any>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [usuario, setUsuario] = useState({ nombre: "Esmeralda" });

  return (
    <AppContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </AppContext.Provider>
  );
}
