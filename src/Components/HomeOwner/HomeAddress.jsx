import './HomeOwner.css';
import React, { useState } from 'react'

const HomeAddress = ({setAddressData}) => {
  const [value, setValue] = useState('')
  


  const handleChange = (e) => { 
    const { name, value } = e.target.value; 
    setAddressData(); 
  } 
  
  return (
    <div className='company-address-form formBox'>
      <form>
          <input type='text'
            className='input-block'
            autoComplete='address-line1'
            name='address'
            value={value}
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
  )}
        
export default HomeAddress;
  