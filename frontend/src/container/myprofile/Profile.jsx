import React from "react";
import { Container, NavDropdown, ListGroup, ListGroupItem ,Button } from "react-bootstrap";
import { CgProfile, CgMail } from "react-icons/cg";
import { BiCurrentLocation } from 'react-icons/bi';
import {IoMdLogOut} from 'react-icons/io'
import { useNavigate } from "react-router-dom";
function Profile() {
const navigate = useNavigate();
  const handleClick =()=>{
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <div>
      <Container>
        <NavDropdown
          title={<CgProfile fontSize="25px" />}
          align="end"
          className="custom-dropdown" 
        >
          <NavDropdown.Item>
            <ListGroup className="text-capitalize">
              <ListGroupItem> <CgProfile />  </ListGroupItem>
              <ListGroupItem><CgMail /></ListGroupItem>
              <ListGroupItem><BiCurrentLocation /> </ListGroupItem>
              <ListGroupItem>
                <Button variant="Link"  onClick={handleClick}>
                  <IoMdLogOut />
                  Log Out
                </Button>
              </ListGroupItem>
            </ListGroup>
          </NavDropdown.Item>
        </NavDropdown>
      </Container>
    </div>
  );
}

export default Profile;
