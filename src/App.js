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
  const [ currentUser, setCurrentUser ] = useState({}); 
  // Form handles 
  const [ saveFlag, setSaveFlag ] = useState(false); 
  const [ editFlag, setEditFlag ] = useState(false); 
  
  const getUserInfo = async () => { 
      setUser(await UserDataSourceAPI.getUser());
    }

  const onSave = async (userInfo) => {
    const response = await UserDataSourceAPI.postUser(userInfo);
    setCurrentUser({});
    setCurrentUser(await UserDataSourceAPI.getUserById(response));
    getUserInfo();
    console.log(currentUser, user);
    // setCurrentUser(await UserDataSourceAPI.getUserById(response)); 
    // console.log("current user = ", currentUser);
  } 

  const onEdit = async (userInfo) => {
    await UserDataSourceAPI.putUser(currentUser);
    getUserInfo(); 
  }

  useEffect(() => {
    getUserInfo();
    
  },[])

   const router = createBrowserRouter( 
    createRoutesFromElements(
      <Route path="/" element={<PageLayout />} >
        <Route index element={<Home 
          user={currentUser} 
          setUser={setCurrentUser}
          onSave={onSave}
          OnEdit={onEdit}  />} /> 
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
