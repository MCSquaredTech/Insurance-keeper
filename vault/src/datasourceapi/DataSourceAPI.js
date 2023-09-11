// import { useState } from 'react';

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

    getPolicyHolder = async () => { 
        const url = `${mockApiKey}/user/?`;
        // const url = new URL('https://64f3b5f1edfa0459f6c6c6b6.mockapi.io/api/user/?');
        const params = new URLSearchParams({ 
            type: 2
        })

        fetch(url + params, { 
            method: "GET", 
            headers: {'content-type': 'application/json'},
        }).then (response => response.json())
        .then(data => {
            return data[0]}) 
        .catch(error => {
            console.log('The Fetch Request for the User Information Failed', error)
        })
    }   
  

    putUserById = async (user) => { 
        const url = `${mockApiKey}/user/${user.id}`
        try { 
            const response = await fetch(url, { 
                method: 'PUT',
                header: { 
                    'content-type': 'application/json',
                },
                body: JSON.stringify(user)
            }); 
        } catch (e) { 
            console.log('The Put Request for User Failed', e);
        }
    } 


    getCurrentAddress = async () => { 
        try{ 
            const url = `${mockApiKey}/address/1`
            const response = await fetch(url, { 
                method: 'GET', 
                header: { 
                    'content-type': 'application/json'
                },
            })
             return await response.json(); 
        
        } catch (e) { 
            console.log('The Fetch Request for the User Information Failed', e);
        }
    }

    putAddressByID = async (address) => { 
        try {
            const url = `${mockApiKey}/address/${address.id}`
            const response = await fetch(url, { 
                method: 'PUT', 
                header: { 
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