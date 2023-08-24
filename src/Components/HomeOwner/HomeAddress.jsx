import './HomeOwner.css';
import React, { useState } from 'react'
import { AddressAutofill } from '@mapbox/search-js-react';

const HomeAddress = () => {
  const [value, setValue] = useState('')
  
  const mapToken = process.env.REACT_APP_MAPBOX_APIKEY;

  const handleChange = (e) => { 
    setValue(e.target.value);
  } 
  
  AddressAutofill.popoverOptions = { 
    placement: 'top-start',
    flip: true, 
    offset: 5
  };

  return (
    <div className='company-address-form formBox'>
      <form>
        <AddressAutofill 
          accessToken={mapToken} >
          <input type='text'
            className='input-block'
            autoComplete='address-line1'
            name='address'
            value={value}
            size={"45"}
            placeholder='Address'
            onChange={handleChange}
            /> 
         </AddressAutofill>
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
  