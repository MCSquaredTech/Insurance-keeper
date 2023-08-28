

const mockApiKey = process.env.REACT_APP_MOCKAPI_KEY;

class UserDataProvider { 
    
    getUser = async () => { 
        try {
            const resp = await fetch(`${mockApiKey}/user`);
            return await resp.json();
        } catch (e) { 
            console.log('The Fetch Request for the User Information Failed', e);
        }
    }

    getUserById = async (User) => { 
        try { 
            const resp = await fetch(`${mockApiKey}/user${User.id}`);
            return await resp.json();
        } catch (e) { 
            console.log('The Fetch Request for the User Information Failed', e);
        }
    }

    postUser = async (User) => { 
        try{
            const resp = await fetch(`${mockApiKey}/user`, {
                method: "POST", 
                headers: { 
                    "content-type": "application/json"
                },
                body: JSON.stringify(User)
            });
            return await resp.json(); 
        } catch(e) { 
            console.log("This is the user object", User);
            console.log('The Post Request for User Failed', e);
        }
    }

    putUser = async (User) => { 
        try { 
            const resp = await fetch(`${mockApiKey}/user/${User.id}`,
            {
                method: 'PUT',
                header: { 
                    "content-type": "appliation/json"
                },
                body: JSON.stringify(User)
            });
            return await resp.json();
        } catch (e) { 
            console.log('The Put Request for User Failed', e);
        }
    }
}

export const UserDataSourceAPI = new UserDataProvider();