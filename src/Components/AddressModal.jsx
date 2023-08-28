import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import HomeAddress from './HomeOwner/HomeAddress';

const AddressModal = ({address}) => {

  const [ saveFlag, setSaveFlag] = useState(true);
  const [ editFlag, setEditFlag ] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const setPrevModal = () => setShow(false);

  const handleSave = () => { 

  }

  const handleEdit = () => { 

  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Next
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <HomeAddress address={address}  />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          { saveFlag ? 
            <Button variant="primary" onClick={handleSave}>Save</Button> : editFlag ?
            <Button variant="primary" onClick={handleEdit}>Edit</Button> :
            <AddressModal setPrevModal={setPrevModal} address/>
          }
            
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddressModal; 