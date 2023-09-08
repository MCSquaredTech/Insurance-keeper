
import { useState } from "react";
import * as biIcon from 'react-icons/bi';

import Button from 'react-bootstrap/Button';

const Personal = ({ data, setData, onEdit }) => {
    const [ readOnly, setReadOnly ] = useState(true);
    const [ dataBackup, setDataBackup ] = useState(null);
    const { first, last, phone, email, id } = data;

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }))
        console.log(data);
    }

    const handleEdit = () => { 
        setDataBackup(data);
        setReadOnly(false);
      }
    
      const handleSave = () => {
        onEdit(data);
        setReadOnly(true);
      }

      const handleCancel = () => { 
        setData(dataBackup); 
        setReadOnly(true);
      }

    return (
        <>
            <div className="formBox formOutline" style={{width: "200px"}}>
                <form>
                    <input
                        type="text"
                        className="inlineBlock"
                        name="first"
                        value={first}
                        onChange={handleOnChange}
                        readOnly={readOnly} />
                    <input
                        type="text"
                        className="inlineBlock"
                        name="last"
                        value={last}
                        onChange={handleOnChange}
                        readOnly={readOnly} />
                    <input
                        type="phone"
                        className="inlineBlock"
                        name=" phone"
                        value={phone}
                        onChange={handleOnChange}
                        readOnly={readOnly} />
                    <input
                        type="email"
                        className="inlineBlock"
                        name="email"
                        value={email}
                        onChange={handleOnChange}
                        readOnly={readOnly} />
                    { readOnly ?
                        <Button variant="primary"
                            onClick={handleEdit}>
                                <biIcon.BiSolidEdit /> Edit
                        </Button> : 
                        <Button variant="primary"
                        onClick={handleSave}>
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
        </>
    )
}

export default Personal;