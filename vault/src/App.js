import { useState } from 'react';
import { DataSourceAPI } from './datasourceapi/DataSourceAPI';
// import { createBrowserRouter, Route, Link, NavLink } from "react-router-dom";
import Personal from './components/Personal';
import Address from './components/Address';
import useFetch from './hooks/useFetch';
import ItemsList from './components/ItemsList';

function App() {

  const [ user, setUser ] = useState(null);
  const Userurl = DataSourceAPI.getPolicyHolder()
  const { data: phUser, loading: phLoading, error: phError } = useFetch(Userurl, setUser);
   
  const [ address, setAddress ] = useState(null);
  const addressUrl = DataSourceAPI.getCurrentAddress();
  const { data: caData, loading: caLoading, error: caError } = useFetch(addressUrl, setAddress);

  const [ item, setItem ] = useState(null); 
  const itemUrl = DataSourceAPI.getItems(); 
  const { data: iData, loading: iLoading, error: iError } = useFetch(itemUrl, setItem); 
  
  const handlePersonalEdit = async (dataSet) => { 
    await DataSourceAPI.putUserById(dataSet); 
  }

  const handleAddressEdit = async (dataSet) => { 
    await DataSourceAPI.putAddressByID(dataSet);
  }

  const handleClick = (item) => { 
    console.log('item clicked', item);
  }

  const handleSave = (dataSet) => { 
    console.log('save item', dataSet); 
  }

  const handleEdit = (dataSet) => { 
    console.log('Edit Item', dataSet);
  }

  const handleDelete = (dataSet) => { 
    console.log("Delete Item", dataSet);
  }

  return (
    <>
      <div>
        <span>
          { phError && <div> { phError } </div>}
          { phLoading && <div> Loading ... </div> }
          { phUser    && 
                      <Personal 
                        data={user} 
                        setData={setUser}
                        onEdit={handlePersonalEdit} /> }
        </span>
        <span>
          { caError && <div> { caError } </div> }
          { caLoading && <div> Loading ...  </div> }
          {/* { !caLoading && setAddress(caData[0])  }  */}
          { caData    &&
                      <Address 
                        data={address} 
                        setData={setAddress}
                        onEdit={handleAddressEdit} /> }
        </span>
        <span>
          { iError && <div> { iError } </div> }
          { iLoading && <div> Loading ... </div> }
          { iData    && 
                     <ItemsList 
                        data={item}
                        policyHolder={user}
                        onClick={handleClick}
                        onSave={handleSave}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                         /> }
        </span>
      </div>
    </>
  )
}

export default App;






