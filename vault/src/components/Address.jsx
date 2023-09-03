

const Address = (data, setData) => {
  const { address, unit, city, state, zip } = {data}
  const handleChange = (e) => { 


  }

  return (
    <div className='formBox formOutline' style={{width: "425px"}}>
      <form>
          <input type='text'
            className='input-block'
            autoComplete='address-line1'
            name='address'
            value={address}
            size={"45"}
            placeholder='Address'
            onChange={handleChange}
            /> 

          <input type="text"
            className='input-block' 
            autoComplete='address-line2'
            name='unit'
            // value={value}
            placeholder='Optional Information'
            size={"45"}

          /> 
          <input type="text"
            className='input-inline' 
            autoComplete='address-level2'
            name='city'
            // value={value}
            placeholder='City'
            size={"20"}

          /> 
          <input type="text"
            className='input-inline' 
            autoComplete='address-level1'
            name='state'
            // value={value}
            placeholder='State'
            size={"5"}

          /> 
          <input type="text"
            className='input-inline' 
            autoComplete='postal-code'
            name='postalcode'
            // value={value}
            placeholder='Postal Code'
            size={"10"}

          /> 
          <input type="text"
            className='input-inline' 
            autoComplete='country-name'
            name='country'
            // value={value}
            placeholder='Country'
            size={"20"}
          />
      </form>
    </div>
  )
}

export default Address;
