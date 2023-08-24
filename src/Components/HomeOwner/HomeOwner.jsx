import './HomeOwner.css'


const HomeOwner = ({user }) => {
  const { First, Last, Email } = user; 

  const handleChange = () => { 

  }

  return (
    <div className="company-address-form formBox">
      <form>

          <input type="text" 
                className="input-block" 
                id="firstName" 
                size={"30"}
                placeholder='First Name' />

          <input type="text" 
                className="input-block" 
                id="lastName" 
                size={"30"}
                placeholder='Last Name' />
          
          <input type="email" 
                className="input-block" 
                id="email" 
                size={"30"}
                placeholder='Email@Somewhere.com' />

          <input type="password" 
                className="input-block" 
                id="password" 
                size={"30"}
                placeholder='password' />
      </form>
    </div>
  )
}

export default HomeOwner
