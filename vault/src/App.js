import { useState, useEffect } from 'react';
import { DataSourceAPI } from './datasourceapi/DataSourceAPI';
// import { createBrowserRouter, Route, Link, NavLink } from "react-router-dom";
import Personal from './components/Personal';
import Address from './components/Address';

const mockApiKey = process.env.REACT_APP_MockApi_Key;
function App() {
  const [ user, setUser ] = useState(null);
  const [ address, setAddress ] = useState(null);

  const handlePersonalEdit = async (dataSet) => { 
    await DataSourceAPI.putUserById(dataSet); 
    getPolicyHolder();
  }

  const handleAddressEdit = async (dataSet) => { 
    await DataSourceAPI.putAddressByID(dataSet);
    getCurrentAddress();
  }

  const getPolicyHolder = async () => { 
    await setUser(DataSourceAPI.getPolicyHolder());
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
        { address && <Address data={address} 
                              setData={setAddress}
                              onEdit={handleAddressEdit} /> }
      </div>
    </>
  )
}

export default App;






