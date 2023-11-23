import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("../JSON/pizzas.json");
      const data = await res.json();
      setPizzas(data);
    } catch (error) {
      console.log("Error");
    }
    console.log(json);
  };

  useEffect(() => {
    getData();
  }, []);

  return <GlobalContext.Provider value={pizzas}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
