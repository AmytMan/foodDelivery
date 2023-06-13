import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Nav, Navbar, Container } from "react-bootstrap";

import Myorder from "../container/myOrder/Myorder";
import Header from "./Header";
import SignupModel from "../container/login/SignupModel";
import Profile from "../container/myprofile/Profile";

function Navbars() {
  const token = localStorage.getItem("token");
  const [modalShow, setModalShow] = useState(false);
  const [signupmodalShow, setSignupModalShow] = useState(false);

  return (
    <>
      <Navbar className="shadow-lg p-3 mb-5 z-10 bg-light" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/dashboard">
            KhajaGhar
          </Navbar.Brand>
          <Nav>
            {token ? (
              <div className=" d-flex ">
                <Myorder />
                <Profile/>
              </div>
            ) : (
              <div>
                <Button variant="Link" onClick={() => setModalShow(true)}>
                  Login
                </Button>
                <Button variant="Link" onClick={() => setSignupModalShow(true)}>
                  Sign Up
                </Button>
              </div>
            )}

            <Header show={modalShow} onHide={() => setModalShow(false)} />
            <div>
              <SignupModel
                show={signupmodalShow}
                onHide={() => setSignupModalShow(false)}
              />
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;
