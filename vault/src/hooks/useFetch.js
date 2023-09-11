import { useState, useEffect } from 'react'

const useFetch = (url, setOption={}) => {
  const [ loading, setLoading ] = useState(false);
  const [ data, setData ] = useState(null);
  const [ error, setError ] = useState(); 
  
  useEffect(() => {
    setLoading(true); 
    fetch(url)
        .then(response => response.json())
        .then(data => {
            setData(data)
            setOption(data[0]) // to get the first record
          })
        .catch(err => setError(err))
        .finally(() => { 
            setLoading(false);
        })
    },[url]);

  return { loading, data, error };
}

export default useFetch;
