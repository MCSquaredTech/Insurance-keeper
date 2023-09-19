import { Outlet } from "react-router-dom";
import PageFooter from "../../components/PageFooter";
import PageHeader from "../../components/PageHeader";
import PageSidebar from "../../components/PageSidebar";

const LayoutThemes = () => {
  return (
    <container>
      <div className="row">
        <div className="col-md-10">
          <PageHeader />
        </div>
      </div>
      <div className="row">
        <div className="col-md-auto">
          <PageSidebar />
        </div>
        <div className='col-md-10'>
          <Outlet />
          <PageFooter /> 
        </div>
      </div>    
    </container>
  )
}

export default LayoutThemes;
