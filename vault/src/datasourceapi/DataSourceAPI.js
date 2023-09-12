
const mockApiKey = process.env.REACT_APP_MockApi_Key;

class DataSourceApi { 
    
    // processFetch = async (url, option) => { 
            
    //     fetch(url, option).then(response =>{
    //         response.json()
    //     }).then(data => { 
    //         return data
    //     }).catch (err => {
    //         console.log(err);
    //     })
    // }

    // try { 
    //     const response = await fetch(`${url}${params.toString()}`, { 
    //         method: 'GET', 
    //         header: { 
    //             'content-type': 'application/json'
    //         },
    //     })
    //     if (response.ok) {
    //         console.log('200 Succss ', await response.json());
    //         return await response.json();  
    //     } else { 
    //         console.log(response.status);
    //     }
        
    //     } catch (e) { 
    //         console.log('The Fetch Request for the User Information Failed', e);
    //     }

    getPolicyHolder = () => { 
        const url = `${mockApiKey}/user/?`;
        const params = new URLSearchParams({ 
            type: 2
        })
        
        return url + params;
    }   
  
    getItems = () => { 
        const url = `${mockApiKey}/vault`;
        return url;
    }
    
    putUserById = async (user) => { 
        const url = `${mockApiKey}/user/${user.id}`
        try { 
            const response = await fetch(url, { 
                method: 'PUT',
                headers: { 
                    'content-type': 'application/json',
                },
                body: JSON.stringify(user)
            }); 
            return response.json();
        } catch (e) { 
            console.log('The Put Request for User Failed', e);
        }
    } 


    getCurrentAddress = () => { 
        const url = `${mockApiKey}/address/?`
        const params = new URLSearchParams({ 
            current: true
        })
        return url + params
    }

    putAddressByID = async (address) => { 
        try {
            const url = `${mockApiKey}/address/${address.id}`
            const response = await fetch(url, { 
                method: 'PUT', 
                headers: { 
                    'content-type': 'application/json'
                },
                body: address
            })
            const results = await response.json(); 
            console.log('Sucess', results);
        } catch (e) { 
            console.log('The Fetch Request for the User Information Failed', e);
        }
    }

}

export const DataSourceAPI = new DataSourceApi();