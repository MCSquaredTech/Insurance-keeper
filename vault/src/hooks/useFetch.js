import React, { useState, useEffect } from 'react'

const useFetch = (url, opt) => {
  const [ loading, setLoading ] = useState(false);
  const [ data, setData ] = useState(null);
  const [ error, setError ] = useState(); 
  
  useEffect(() => {
    setLoading(true); 
    fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(err => setError(err))
        .finally(() => { 
            setLoading(false);
        })
    },[url]);

  return { loading, data, error };
}

export default useFetch;
