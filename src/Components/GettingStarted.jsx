import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import HomeOwner from './HomeOwner/HomeOwner';

const GettingStarted = ({user, setUser,  onSave, onEdit}) => {
  const [ saveFlag, setSaveFlag] = useState(true);
  const [ editFlag, setEditFlag ] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = () => {
    onSave(user);
    setSaveFlag(false);
    setShow(false);
  }

  const handleEdit = () => { 
    onEdit(user);
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
          <HomeOwner user={user}  setUser={setUser} enable={true} />
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