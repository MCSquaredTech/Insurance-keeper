// import { useState } from 'react';
// import useFetch from './hooks/useFetch';

// import { DataSourceAPI } from './datasourceapi/DataSourceAPI';

import LayoutThemes from './pages/layouts/LayoutThemes'; 
import HomePage from './pages/HomePage';
import Items from './pages/Items';

import { createBrowserRouter, 
        RouterProvider,
        Route, 
        createRoutesFromElements} from "react-router-dom";


function App() {

  // const [ user, setUser ] = useState(null);
  // const Userurl = DataSourceAPI.getPolicyHolder()
  // const { data: phUser, loading: phLoading, error: phError } = useFetch(Userurl, setUser);
   
  // const [ address, setAddress ] = useState(null);
  // const addressUrl = DataSourceAPI.getCurrentAddress();
  // const { data: caData, loading: caLoading, error: caError } = useFetch(addressUrl, setAddress);

  // const [ item, setItem ] = useState(null); 
  // const itemUrl = DataSourceAPI.getItems(); 
  // const { data: iData, loading: iLoading, error: iError } = useFetch(itemUrl, setItem); 
  
  // const handlePersonalEdit = async (dataSet) => { 
  //   await DataSourceAPI.putUserById(dataSet); 
  // }

  // const handleAddressEdit = async (dataSet) => { 
  //   await DataSourceAPI.putAddressByID(dataSet);
  // }

  // const handleClick = (item) => { 
  //   console.log('Clicked Item', item);
  // }

  // const handleSave = (dataSet) => { 
  //   console.log('save item', dataSet); 
  // }

  // const handleEdit = (dataSet) => { 
  //   console.log('Edit Item', dataSet);
  // }

  // const handleDelete = (dataSet) => { 
  //   console.log("Delete Item", dataSet);
  // }

  const router = createBrowserRouter(
    createRoutesFromElements( 
      <Route element={<LayoutThemes />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/items" element={<Items />} />
      </Route>
  
    )
  )

  return (
    <RouterProvider router={router} />
  )

}

export default App;






