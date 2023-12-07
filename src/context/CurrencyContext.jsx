import { createContext, useContext, useEffect, useState } from "react";

const Currency = createContext();

const CurrencyContext = ({ children }) => {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");

  useEffect(() => {
    if (currency === "INR") setSymbol("₹");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);

  return (
    <Currency.Provider value={{ currency, symbol, setCurrency }}>
      {children}
    </Currency.Provider>
  );
};

export default CurrencyContext;

export const CurrencyState = () => {
  return useContext(Currency);
};
