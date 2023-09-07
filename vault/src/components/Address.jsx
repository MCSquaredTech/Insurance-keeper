import { useState } from "react";
import * as biIcon from 'react-icons/bi';

import Button from 'react-bootstrap/Button';

const Address = (data, setData, onEdit) => {
  const [ readOnly, setReadOnly ] = useState(true);
  const [ dataBackup, setDataBackup ] = useState(null);

  const { address, unit, city, state, postalcode, country } = data.data
  const handleChange = (e) => { 
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  }

  const handleEdit = () => { 
    setDataBackup(data);
    setReadOnly(false);
  }

  const handleCancel = () => { 
    setData(dataBackup); 
    setReadOnly(true);
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
            value={unit}
            placeholder='Optional Information'
            size={"45"}

          /> 
          <input type="text"
            className='input-inline' 
            autoComplete='address-level2'
            name='city'
            value={city}
            placeholder='City'
            size={"20"}

          /> 
          <input type="text"
            className='input-inline' 
            autoComplete='address-level1'
            name='state'
            value={state}
            placeholder='State'
            size={"5"}

          /> 
          <input type="text"
            className='input-inline' 
            autoComplete='postal-code'
            name='postalcode'
            value={postalcode}
            placeholder='Postal Code'
            size={"10"}

          /> 
          <input type="text"
            className='input-inline' 
            autoComplete='country-name'
            name='country'
            value={country}
            placeholder='Country'
            size={"20"}
          />
          { readOnly ?
              <Button variant="primary"
                  onClick={handleEdit}>
                      <biIcon.BiSolidEdit /> Edit
              </Button> : 
              <Button variant="primary"
              onClick={onEdit}>
                  <biIcon.BiSolidSave /> Save
              </Button> }{
            !readOnly && 
              <Button variant="primary"
                  onClick={handleCancel}>
                      <biIcon.BiSolidLock /> Cancel 
              </Button>    
          }
      </form>
    </div>
  )
}

export default Address;
