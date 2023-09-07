import { useState, useEffect } from 'react';
import { DataSourceAPI } from './datasourceapi/DataSourceAPI';
import { createBrowserRouter, Route, Link, NavLink } from "react-router-dom";
import Personal from './components/Personal';
import Address from './components/Address';

const mockApiKey = process.env.REACT_APP_MockApi_Key;
function App() {
  const [ user, setUser ] = useState(null);
  const [ address, setAddress ] = useState(null);

  const handlePersonalEdit = (dataSet) => { 
    console.log(dataSet);
  }

  const getPolicyHolder = async () => { 
    setUser(await DataSourceAPI.getPolicyHolder());
  }

  const getCurrentAddress = async () => { 
    setAddress(await DataSourceAPI.getCurrentAddress());   
  }

  useEffect(() => { 

    getPolicyHolder(); 
    getCurrentAddress();

  }, [])

  return (
    <>
      <div>
        { user && <Personal data={user} 
                            setData={setUser}
                            onEdit={handlePersonalEdit} /> }
        { address && <Address data={address} setData={setAddress} /> }
      </div>
    </>
  )
}

export default App;






