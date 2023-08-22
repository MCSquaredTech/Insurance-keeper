import { createBrowserRouter, 
        Route, 
        createRoutesFromElements,
        RouterProvider} from "react-router-dom"; 

// Import Pages Layout 
import PageLayout from "./Pages/PageLayout";
import Home from "./Pages/Home";
import AddItems from './Pages/AddItem';
import ItemDetails from './Pages/ItemDetails';
import Support from './Pages/Support';
import Start from "./Pages/Start";

const router = createBrowserRouter( 
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />} >
      <Route index element={<Home />} /> 
      <Route path="getStarted" element={<Start />} />
      <Route path="addItems" element={<AddItems />} />
      <Route path="itemDetails" element={<ItemDetails />} /> 
      <Route path="support" element={<Support />} />
    </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
