import { useState } from "react";
import * as biIcon from 'react-icons/bi';

import Button from 'react-bootstrap/Button';

const Address = ({ data={}, setData, onEdit }) => {
  const [ readOnly, setReadOnly ] = useState(true);
  const [ dataBackup, setDataBackup ] = useState(null);

  const { address, unit, city, state, postalcode, country } = data;
  
  const handleChange = (e) => { 
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  }

  const handleEdit = () => { 
    setDataBackup(data);
    setReadOnly(false);
  }

  const handleSave = () => {
    setDataBackup(null); 
    setReadOnly(true);
    onEdit(data);
    
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
            name='address'
            value={address}
            size={"45"}
            readOnly={readOnly}
            placeholder='Address'
            onChange={handleChange}
            /> 

          <input type="text"
            className='input-block' 
            name='unit'
            value={unit}
            size={"45"}
            readOnly={readOnly}
            placeholder='Optional Information'
            onChange={handleChange}

          /> 
          <input type="text"
            className='input-inline' 
            name='city'
            value={city}
            size={"20"}
            readOnly={readOnly}
            placeholder='City'
            onChange={handleChange}

          /> 
          <input type="text"
            className='input-inline' 
            name='state'
            value={state}
            size={"5"}
            readOnly={readOnly}
            placeholder='State'
            onChange={handleChange}

          /> 
          <input type="text"
            className='input-inline' 
            name='postalcode'
            value={postalcode}
            size={"10"}
            readOnly={readOnly}
            placeholder='Postal Code'
            onChange={handleChange}

          /> 
          <input type="text"
            className='input-inline' 
            name='country'
            value={country}
            size={"20"}
            readOnly={readOnly}
            placeholder='Country'
            onChange={handleChange}
          />
          { readOnly ?
              <Button variant="primary"
                className="btn-margin"
                onClick={handleEdit}>
                    <biIcon.BiSolidEdit /> Edit
              </Button> : 
              <Button variant="primary"
                className="btn-margin"
                onClick={handleSave}>
                    <biIcon.BiSolidSave /> Update
              </Button> }{
            !readOnly && 
              <Button variant="primary"
              className="btn-margin"
                onClick={handleCancel}>
                    <biIcon.BiSolidLock /> Cancel 
              </Button>    
          }
      </form>
    </div>
  )
}

export default Address;
