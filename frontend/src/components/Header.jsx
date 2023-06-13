import React from 'react';
import {Modal,Button} from 'react-bootstrap';
import Login from '../container/login/Login'
function Header(props) {
  
  
  return (
    <div>
      <Modal
        {...props}
        size="md"
        centered
        className="text-dark text-capitalize"
        
      >
       <Modal.Header closeButton>
          <Modal.Title className="text-uppercase">
          Log In To Khajaghar
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Login/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>



    </div>
  );
}

export default Header;
