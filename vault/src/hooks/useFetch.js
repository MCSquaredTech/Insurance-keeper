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
            setData(data);
            if(data.length === 1) {
              setOption(data[0]); // to get the first record
            } else { 
              setOption(data);
            }
            
          })
        .catch(err => setError(err))
        .finally(() => { 
            setLoading(false);
        })
    },[url, setOption]);

  return { loading, data, error };
}

export default useFetch;
