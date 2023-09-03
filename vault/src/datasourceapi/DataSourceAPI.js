
const mockApiKey = process.env.REACT_APP_MOCKIO_API;

class DataSourceApi { 

    processFetch(option) { 

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

}