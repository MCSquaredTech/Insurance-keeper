

const mockApiKey = process.env.REACT_APP_MOCKAPI_KEY;

class UserDataProvider { 

    getUser = async () => { 
        try {
            const resp = await fetch(`${mockApiKey}/User`);
            return await resp.json();
        } catch (e) { 
            console.log('The Fetch Request for the User Information Failed', e);
        }
    }

    getUserById = async (User) => { 
        try { 
            const resp = await fetch(`${mockApiKey}/User/${User.id}`);
            return await resp.json();
        } catch (e) { 
            console.log('The Fetch Request for the User Information Failed', e);
        }
    }

    postUser = async (User) => { 
        try { 
            const resp = await fetch(`${mockApiKey}/User`,
            {
                method: "POST",
                header: { 

                },
                body: JSON.stringify(User);
            });
            return await resp.json();
        } catch (e) { 
            console.log('The Post Request for User Failed', e);
        }
    }
}