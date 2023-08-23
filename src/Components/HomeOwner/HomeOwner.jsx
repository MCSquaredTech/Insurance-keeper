import './HomeOwner.css'


const HomeOwner = () => {
  return (
    <div className="formBox">
      <form action="" className="form">
        <div className="form-group row">
          <label htmlFor="firstName" className="col-sm-4 col-form-label">First Name:</label>
          <input type="text" 
                className="form-control-plaintext" 
                id="firstName" 
                size={"30"}
                placeholder='First Name' />
        </div>
        <div className="form-group row">
          <label htmlFor="lastName" className="col-sm-4 col-form-label">Last Name:</label>
          <input type="text" 
                className="form-control-plaintext" 
                id="lastName" 
                size={"30"}
                placeholder='Last Name' />
        </div>
        <div className="form-group row">
          <label htmlFor="email" className="col-sm-4 col-form-label">Email Address:</label>
          <input type="email" 
                className="form-control-plaintext" 
                id="email" 
                size={"24"}
                readOnly={false}
                placeholder='Email Address' />
        </div>
        
      </form>
    </div>
  )
}

export default HomeOwner
