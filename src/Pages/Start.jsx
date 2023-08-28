import HomeOwner from '../Components/HomeOwner/HomeOwner';
import HomeAddress from '../Components/HomeOwner/HomeAddress';

import './Page.css';

const Start = ({user}) => {
  return (
    <>
      <div className='mainPage pageLine'>
        <div className="flotLeft">
          <HomeOwner user={user}/>
        </div>
        <div className="floatRight">
          <h4>Address</h4>
          <HomeAddress />
        </div>
      
      </div>
    </>
    
  )
}

export default Start
