import React, { useState } from "react";
import { Button, Form, Card ,Modal } from "react-bootstrap";
import { useNavigate ,Link  } from "react-router-dom";
import Header from "./Header";
function BodyCards(props) {
  const navigate = useNavigate();
  const [modalShow ,setModalShow]= useState(false)
  const [viewModal ,setViewModal]= useState(false)


  const handleAdd = () => {
      setModalShow(true)
    }
    const handleView = () => {
      setViewModal(true)
    }

  return (
    <>
    <Modal
     show={viewModal}
     size="md"
     centered
     onHide={() => setViewModal(false)}

    >
     <Modal.Header closeButton>
      <Modal.Title >
      {props.data.name}
      </Modal.Title>
     </Modal.Header>
     <Modal.Body>
     <Card >
        <Card.Img variant="top" src={props.data.img} style={{height:"200px"}} />
        <Card.Body>
          <Card.Title>{props.data.name}</Card.Title>
          <Card.Text>{props.data.description}</Card.Text> 
        </Card.Body>
      </Card>
     </Modal.Body>
     <Modal.Footer>
      <Button variant="dark" onClick={()=>(setViewModal(false))}>
            Close
      </Button></Modal.Footer>
    </Modal>

      <Card style={{ width: "20rem" }} className="card_wrapper">
        <Card.Img variant="top" src={props.data.img} style={{height:"200px"}} />
        <Card.Body>
          <Card.Title>{props.data.name}</Card.Title>
          
          <Button variant="success"  onClick={handleAdd}>
               Add 
            </Button>
            <Button className=" float-end " onClick={handleView}>
              view
            </Button>
        </Card.Body>
      </Card>
      <div>
            <Header 
             show={modalShow}
             onHide={() => setModalShow(false)}/>
          </div>
    </>
    
  );
}

export default  BodyCards;
