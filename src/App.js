// React Hooks - 
import { useState, useEffect } from "react";

// import React Router Dom 
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

function App() {
  const [ user, setUser ] = useState([]);
  const [ currentUser, setCurrentUser ] = useState({}); 
   
  const getUserInfo = async () => { 
      setUser(await UserDataSourceAPI.getUser()); 
    }

    const getUserById = () => { 
      console.log("getUserById - ",user);
      setCurrentUser( UserDataSourceAPI.getUserById(user));
    }

  const onSave = async (userInfo) => {
    const response = await UserDataSourceAPI.postUser(userInfo);
    setCurrentUser({});
    setCurrentUser(await UserDataSourceAPI.getUserById(response));
    getUserInfo();
  } 

  const onEdit = async (userInfo) => {
    await UserDataSourceAPI.putUser(currentUser);
    getUserInfo(); 
  }

  useEffect(() => {
    console.log("Get User Information");
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
        <Route path="itemDetails" element={<ItemDetails 
          user={user} 
          setUser={setUser} />} /> 
        <Route path="support" element={<Support />} />
      </Route>
    )
  )
        
  return (
    <RouterProvider router={router} />
  );
}

export default App;
