
const mockIoAPI = process.env.REACT_APP_MOCKIO_API;

class DataSourceApi { 

    getUsers = async () => { 
        fetch(`${mockIoAPI}/user`)
    }

    getUserById = async (User) => { 

    }

    postUser = async (User) => { 

    }

    putUser = async (User) => { 

    }

    deleteUser = async (User) => { 

    }

    getAddressByUser = async (User) => { 

    }

    postAddress = async (User, Address) => { 

    }

    putAddress = async (User, Address) => { 

    }

    deleteAddress = async (User, Address) => { 

    }



}