import { useState, useEffect } from 'react';
import { createBrowserRouter, Route, Link, NavLink } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import Personal from './components/Personal';
import Address from './components/Address';

const mockApiKey = process.env.REACT_APP_MockApi_Key;
function App() {

  const { loading, data, error } = useFetch(mockApiKey + '/user/1');
  const [ user, setUser ] = useState();
  const { address, setAddress } = useState();

  const handlePersonalEdit = (dataSet) => { 
    
  }

  { (loading) && <h1> Loading... </h1> ;
    (error) && console.log(error) }

  return (
    <>
      <div>
        { data && <Personal data={data} 
                            setData={setUser}
                            onEdit={handlePersonalEdit} /> }
        { address && <Address data={address} setData={setAddress} /> }
      </div>
    </>
  )
}

export default App;






