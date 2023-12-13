import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react';

type MisdeameanourContextType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

type MisdeameanourContextProviderType = {
  children: React.ReactNode
}

export const MisdeameanourContext = createContext({} as MisdeameanourContextType);

export const MisdeameanourContextProvider = ({children}: MisdeameanourContextProviderType) => {
  const [data, setData] = useState(null);
  const navigate = useNavigate(); // get the navigate function from React Router


  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (response.status === 404) {
        console.error("Data not found: 404");
        navigate("/404");
      } else {
        const jsonData = await response.json();
        setData(jsonData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const fetchDataExample = async () => {

      try {
        console.log("here");

        await fetchData("http://localhost:8080/api/misdemeanours/10");
      } catch (e) {
        console.log("catch", e);
      }
    };

    fetchDataExample();
  }, []);

  return <MisdeameanourContext.Provider value={{ data }}>{children}</MisdeameanourContext.Provider>
}