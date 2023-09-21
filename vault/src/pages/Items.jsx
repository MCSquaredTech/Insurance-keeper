import { Link, useLoaderData } from "react-router-dom";
import Image from 'react-bootstrap/Image'


function Items() {
    const items = useLoaderData()
    // const items = data.vault;
    // const user = data.user;
    
    return (
      <>
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
    const response = await fetch('https://64f3b5f1edfa0459f6c6c6b6.mockapi.io/api/vault', { 
      method: "GET",
      headers: { 
        'content-type': 'application/json'
      },
    })
    return response.json();   
  }

  export const policyLoader = async () => {
    const response = await fetch('https://64f3b5f1edfa0459f6c6c6b6.mockapi.io/api/user', { 
        method: "GET", 
        headers: { 
            'content-type': 'application/json'
        },
    })
    return response.json();
  }