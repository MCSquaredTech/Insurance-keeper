
import './HomeOwner.css'



const HomeOwner = ({user, setUser}) => {   
      console.log(user);
      const { id, first, last, phone, email, password } = user;
      

      const handleChange = (e) => {
            const { name, value } = e.target;
            setUser((prevData) => ({...prevData, [name]: value}))
          
      }

      return (
            <div className="company-address-form formBox">
                  <form >
                        <input type="text"
                              className="input-block"
                              name="first"
                              value={first}
                              size={"30"}
                              onChange={handleChange}
                              placeholder='First Name' />

                        <input type="text"
                              className="input-block"
                              name="last"
                              value={last}
                              size={"30"}
                              onChange={handleChange}
                              placeholder='Last Name' />

                        <input type="text"
                              className="input-block"
                              value={phone}
                              name="phone"
                              onChange={handleChange}
                              size={"30"}
                              placeholder='Phone Number' />

                        <input type="email"
                              className="input-block"
                              value={email}
                              name="email"
                              onChange={handleChange}
                              size={"30"}
                              placeholder='Email@Somewhere.com' />

                        <input type="password"
                              className="input-block"
                              value={password}
                              name="password"
                              onChange={handleChange}
                              size={"30"}
                              placeholder='password' />
                  </form>
            </div>
      )
}

export default HomeOwner
