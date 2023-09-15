import Personal from "../components/Personal"
import Address from "../components/Address"


function UserInformation({user, setUser, handlePersonalEdit, address, setAddress, handleAddressEdit}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
            <Personal 
                data={user} 
                setData={setUser}
                onEdit={handlePersonalEdit} />
        </div>
        <div className="col-md-8">
            <Address 
                data={address} 
                setData={setAddress}
                onEdit={handleAddressEdit} />
        </div>
      </div>
    </div>
  )
}

export default UserInformation
