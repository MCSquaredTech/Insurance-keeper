import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import HomeOwner from './HomeOwner/HomeOwner';
import AddressModal from './AddressModal';

const GettingStarted = ({user={},  onSave, onEdit}) => {
  const [ saveFlag, setSaveFlag] = useState(true);
  const [ editFlag, setEditFlag ] = useState(false);

  const [ userData, setUserData ] = useState(user);
  const { first, last, phone, email, password } = userData;
      

  const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({...prevData, [name]: value}))
      
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = () => {
    onSave({userData});
    setSaveFlag(false);
    setShow(false);
  }

  const handleEdit = () => { 
    onEdit(userData);
    setEditFlag(false); 
    setShow(false);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Get Started
      </Button>

      <Modal
        user={user}
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <HomeOwner userData={userData}  setUserData={setUserData} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          { saveFlag ? 
            <Button variant="primary" onClick={(e) => handleSave(e)}>Save</Button> : 
            <Button variant="primary" onClick={handleEdit}>Edit</Button> 
          }
            
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default GettingStarted; 