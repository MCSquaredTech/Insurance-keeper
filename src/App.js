import { useState, useEffect } from "react";

import { createBrowserRouter, 
        Route, 
        createRoutesFromElements,
        RouterProvider} from "react-router-dom"; 

// Import Pages Layout 
import PageLayout from "./Pages/PageLayout";

// Import Pages 
import Home from "./Pages/Home";
import AddItems from './Pages/AddItem';
import ItemDetails from './Pages/ItemDetails';
import Support from './Pages/Support';
import Start from "./Pages/Start";

// Import DataSourceAPI 
import { UserDataSourceAPI } from "./DataSource/UserDataProvider";
import { logDOM } from "@testing-library/react";




function App() {
  const [ user, setUser ] = useState([]);
  // Form handles 
  const [ saveFlag, setSaveFlag ] = useState(false); 
  const [ editFlag, setEditFlag ] = useState(false); 
  
  const getUserInfo = async () => { 
      setUser(await UserDataSourceAPI.getUser());
    }
  
  const newUser = () => {
    return (
      setUser({
        "first": "",
        "last": "",
        "email": "",
        "password": "",
        "phone": "",
        "id": ""
       })
    )
  }

  const onSave = async (userInfo) => {
      await UserDataSourceAPI.postUser(userInfo.userData);
      getUserInfo();
  } 

  const handleEdit = async (user) => { 
  }
  useEffect(() => {
    getUserInfo();
    if (user.length === 0) { 
      newUser();
    }
  },[])

   const router = createBrowserRouter( 
    createRoutesFromElements(
      <Route path="/" element={<PageLayout />} >
        <Route index element={<Home 
            user={user} 
            onSave={onSave}
            OnEdit={handleEdit}  />} /> 
        <Route path="getStarted" element={<Start />} />
        <Route path="addItems" element={<AddItems />} />
        <Route path="itemDetails" element={<ItemDetails />} /> 
        <Route path="support" element={<Support />} />
      </Route>
    )
  )
        
  return (
    <RouterProvider router={router} />
  );
}

export default App;
