import { useState, useEffect } from 'react'; 

function useDataLoader(loader={}, action={}) {
  const [ data, setData ] = useState(null);

  useEffect(() => { 
    loader()
     .then(data => { 
        setData(data)
     })
     console.log(data)
     return data;
  }, [])
}

export default useDataLoader
