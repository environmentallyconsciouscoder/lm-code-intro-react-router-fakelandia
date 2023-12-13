import { useState } from "react";

export function useLoading() {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = () => {
    setIsLoading(true);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

  const fetchData = async (url: string) => {
    try {
      startLoading();

      const response = await fetch(url);

      if (response.status === 404) {
        console.error("Data not found: 404");
        return "404"
    }

      stopLoading();

      return response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
      stopLoading();
      return { error: "Error fetching data" };
    }
  };

  return { isLoading, startLoading, stopLoading, fetchData };
}
