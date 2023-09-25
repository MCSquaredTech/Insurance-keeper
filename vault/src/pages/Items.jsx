import { useState, useEffect } from 'react'; 
import { Link, useLoaderData } from "react-router-dom";
import Image from 'react-bootstrap/Image'
import Personal, { getPolicyLoader } from '../components/Personal';


function Items() {
    const [ user, setUser ] = useState(null);
    const [ items, setItems ] = useState(null);
    
    const data = useLoaderData();

    setUser(data.user);
    setItems(data.vault);

    const handleEdit = (dataSet) => { 
      console.log('Edit Item', dataSet);
    }
    
    return (
      <>
          <div><Personal 
              data={user}
              setData={setUser}
              onEdit={handleEdit} /> </div> 
          <div className="itemList row">
              {items.map(item => (
                  <Link to="/" key={item.id}> 
                      <p>{<Image src={item.picture} rounded height={71} width={80}/>}</p>
                      <p>{item.description}</p>
                  </Link>
              ))}
          </div> 

      </>
        
    )
}

export default Items;

export const itemListLoader = async () => { 
    const vault = null;
    const user = null;

    const urlUser = 'https://64f3b5f1edfa0459f6c6c6b6.mockapi.io/api/user?type=2';
    const urlVault = 'https://64f3b5f1edfa0459f6c6c6b6.mockapi.io/api/vault';
 
    const loadDataSets = async (url) => { 
      const response = fetch(url, {
        method: "GET",
        headers: { 
          'content-type': 'application/json'
          },
        })  
        return await response.json(); 
    };

    vault = await loadDataSets(urlVault);
    user = await loadDataSets(urlUser);
    
    if ( vault && user ) {
       return { vault, user};
      }
  }   
