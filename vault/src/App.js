import { useState } from 'react';
import { DataSourceAPI } from './datasourceapi/DataSourceAPI';
// import { createBrowserRouter, Route, Link, NavLink } from "react-router-dom";
import Personal from './components/Personal';
import Address from './components/Address';
import useFetch from './hooks/useFetch';

function App() {
  const [ data, setData ] = useState(null);
  const [ user, setUser ] = useState(null);
  const url = DataSourceAPI.getPolicyHolder()
  const { data: phUser, loading: phLoading, error: phError } = useFetch(url, setUser);

   
  const [ address, setAddress ] = useState(null);
  const addressUrl = DataSourceAPI.getCurrentAddress();
  const { data: caData, loading: caLoading, error: caError } = useFetch(addressUrl, setAddress);

  const handlePersonalEdit = async (dataSet) => { 
    console.log(dataSet)
    await DataSourceAPI.putUserById(dataSet); 
    // getPolicyHolder();
  }

  const handleAddressEdit = async (dataSet) => { 
    await DataSourceAPI.putAddressByID(dataSet);
    // getCurrentAddress();
  }

  const getPolicyHolder =  () => { 
    const url = DataSourceAPI.getPolicyHolder();
    return url;
  }

  const getCurrentAddress =  () => { 
    const url = DataSourceAPI.getCurrentAddress(); 
    return url;
  }

  return (
    <>
      <div>
        { phError && <div> { phError } </div>}
        { phLoading && <div> Loading ... </div> }
        { phUser    && 
                     <Personal 
                      data={user} 
                      setData={setUser}
                      onEdit={handlePersonalEdit} /> }
        { caError && <div> { caError } </div> }
        { caLoading && <div> Loading ...  </div> }
        {/* { !caLoading && setAddress(caData[0])  }  */}
        { caData    &&
                     <Address 
                      data={address} 
                      setData={setAddress}
                      onEdit={handleAddressEdit} /> }
      </div>
    </>
  )
}

export default App;






