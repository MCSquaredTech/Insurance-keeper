import './HomeOwner.css'


const HomeOwner = () => {
  return (
    <div className="formBox">
      <form action="" className="form-group row">
        <label htmlFor="firstName" className="col-sm-4 col-form-label">First Name:</label>
        <input type="text" 
              className="form-control-plaintext" 
              id="firstName" 
              value="" 
              size={12}
              placeholder='First Name' />
      </form>
    </div>
  )
}

export default HomeOwner
