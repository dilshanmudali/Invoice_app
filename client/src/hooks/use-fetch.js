import { useState } from 'react';

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async (req) => {
    setIsLoading(true);
    setError(false);

    const responseData = await fetch(req.endpoint, {
      method: req.method ? req.method : 'GET',
      headers: req.headers,
      body: req.body ? JSON.stringify(req.body) : null,
    });

    if (responseData.status !== 200) {
      setError(true);
      console.log('API Status code', responseData.status);
      return;
    }

    return responseData.json();
  };

  return {
    fetchData,
    isLoading,
    error,
  };
};

export default useFetch;
