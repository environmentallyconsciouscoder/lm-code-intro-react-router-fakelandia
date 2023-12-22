import { createContext, useEffect } from "react";
import React from 'react';
import useApi from "../hooks/useFetch";
import { Misdemeanour } from '../types/misdeameanour.types';

type MisdeameanourContextType = {
  data: {misdemeanours: [Misdemeanour]} | null;
}

type MisdeameanourContextProviderType = {
  children: React.ReactNode
}

export const MisdeameanourContext = createContext({} as MisdeameanourContextType);

export const MisdeameanourContextProvider = ({children}: MisdeameanourContextProviderType) => {
  const { fetchData, data } = useApi();

  useEffect(() => {
    const fetchDataExample = async () => {
      await fetchData("http://localhost:8080/api/misdemeanours/10");
    };

    fetchDataExample();
  }, []);

  return <MisdeameanourContext.Provider value={{ data }}>{children}</MisdeameanourContext.Provider>
}