import React from 'react';
import {Modal,Button} from 'react-bootstrap';
import Signup from './Signup'
function SignupModel(props) {
  
  
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
        Sign Up
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Signup/>
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

export default SignupModel;
