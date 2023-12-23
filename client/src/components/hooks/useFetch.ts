import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Misdemeanour } from '../types/misdeameanour.types';

interface UseApiResult {
  fetchData: (url: string, method?: 'GET' | 'POST', body?: object) => Promise<void>;
  data: { misdemeanours: [Misdemeanour] } | null;
  loading: boolean;
  error: string | null;
  dataFromPostRequest: { justTalked: boolean } | null;
}

function useApi(): UseApiResult {
  const [data, setData] = useState<{ misdemeanours: [Misdemeanour] } | null>(null);
  const [dataFromPostRequest, setDataFromPostRequest] = useState<{ justTalked: boolean } | null>(null);

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchData = async (url: string, method: 'GET' | 'POST' = 'GET', body?: object) => {
    try {
      setLoading(true);
      const options: RequestInit = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      };

      if (method === 'POST' && body) {
        options.body = JSON.stringify(body);
      }

      const response = await fetch(url, options);

      if (response.status === 404 || response.status === 500) {
        console.error('Data not found: 404');
        setError('Data not found');
        navigate(`/error/${response.status}`);
      } else {
        const jsonData = await response.json();

        setDataFromPostRequest(jsonData);
        setError(null);

        if (method === 'POST') {
          setDataFromPostRequest(jsonData);
          setError(null);
        } else {
          setData(jsonData);
          setError(null);
        }
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  return { fetchData, data, loading, error, dataFromPostRequest };
}

export default useApi;