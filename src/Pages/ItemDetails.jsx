import GettingStarted from "../Components/GettingStarted"
import { useState, useEffect } from "react";

import Card from 'react-bootstrap/Card';
import HomeOwner from "../Components/HomeOwner/HomeOwner";

import { UserDataSourceAPI } from "../DataSource/UserDataProvider";

const ItemDetails = (user, setUser, onSave, onEdit) => {
 const [ currentUser, setCurrentUser ] = useState({});
 useEffect(() => { 
  console.log(user)
  if (user.length === 1) { 
    console.log("getUserById - ",user);
    setCurrentUser( UserDataSourceAPI.getUserById(user));
  }
 },[])

  
  return (
    <div style={{padding: "30px 0 0 0"}}>
      <Card border="primary" style={{ width: '24rem' }}>
        <Card.Header>Insuranance Vault</Card.Header>
        <Card.Body>
          <Card.Title>User Information</Card.Title>
            <HomeOwner user={currentUser} setUser={setCurrentUser} readOnly={false} />
        </Card.Body>
      </Card>
      <div style={{padding: "10px 0 0 0"}}>
        <GettingStarted 
           user={user}
            setUser={setUser}
            onSave={onSave}
            onEdit={onEdit} />

      </div>
        
    </div>
  )
}

export default ItemDetails
