import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("pizzas.json");
      const json = await res.json();
      setPizzas(json);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(pizzas);
  return <GlobalContext.Provider value={{ pizzas }}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
