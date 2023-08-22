import { Outlet } from "react-router-dom"

// Import Components 
import Header from '../Components/Header/Header';
import LeftSidebar from '../Components/Sidebar/Sidebar';
import Footer from '../Components/Footer'; 

const PageLayout = () => {
  return (
    <div className="pageLayout">
      <div className="row">
        <div className="col-md-12 pageHeader">
          <Header /> 
        </div>    
      </div>
      <div className="row">
        <div className="col-md-auto">
        <LeftSidebar />
        </div>
        <div className="col-md-8">
          <Outlet /> 
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default PageLayout;
