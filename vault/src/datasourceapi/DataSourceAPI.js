// import { useState } from "react";

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

    getPolicyHolder = async () => { 
        try { 
            
            const url = `${mockApiKey}user/2`;
            const response = await fetch(url, { 
                method: "GET", 
                header: { 
                    "content-type": "application/json"
                },
            })
            return response.json(); 

        } catch (e) { 
            console.log('The Fetch Request for the User Information Failed', e);
        }

    }

    getCurrentAddress = async () => { 
        try{ 
            const url = `${mockApiKey}address/1`
            const response = await fetch(url, { 
                method: "GET", 
                header: { 
                    "content-type": "application/json"
                },
            })
            return response.json(); 
        
        } catch (e) { 
            console.log('The Fetch Request for the User Information Failed', e);
        }
    }

}

export const DataSourceAPI = new DataSourceApi();