import { useEffect, useState } from "react";

import Button from 'react-bootstrap/Button';

// icon resources 
import * as biIcon from 'react-icons/bi'

const Personal = ({ data={}, setData, onEdit }) => {
    const [ readOnly, setReadOnly ] = useState(true); 
    const [ dataBackup, setDataBackup ] = useState(null);
    const { first, last, phone, email, policy } = data;

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({...prevData, [name]: value }))
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
        <>
        { data &&
            <div className="formBox formOutline" style={{width: "420px"}}>
                <form>
                    <input
                        type="text"
                        className="inlineBlock"
                        name="first"
                        size={10}
                        value={first}
                        readOnly={readOnly}
                        onChange={handleOnChange} />
                    <input
                        type="text"
                        className="inlineBlock"
                        name="last"
                        size={23}
                        value={last}
                        readOnly={readOnly}
                        onChange={handleOnChange} />
                    <input
                        type="phone"
                        className="inlineBlock"
                        name=" phone"
                        size={10}
                        value={phone}
                        readOnly={readOnly}
                        onChange={handleOnChange} />
                    <input
                        type="email"
                        className="inlineBlock"
                        name="email"
                        size={23}
                        value={email}
                        readOnly={readOnly}
                        onChange={handleOnChange} />
                    <input
                        type="text"
                        className="inlineBlock"
                        name="policy"
                        size={37}
                        value={policy}
                        readOnly={readOnly}
                        onChange={handleOnChange} />
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
            </div>}
        </>
    )
}

export default Personal;

export const getPolicyLoader = async () => {
    const url = 'https://64f3b5f1edfa0459f6c6c6b6.mockapi.io/api/user?type=2';

    const response = await fetch(url, { 
      method: "GET",
      headers: { 
        'content-type': 'application/json'
      },
    })
    return response.json();
  }