import React from "react";
import { CartState } from "../../context/Context";
import Navbars from "../../components/Navbar";
import { ListGroup, ListGroupItem, Container, Row, Col ,Button } from "react-bootstrap";
import {BsCurrencyRupee} from "react-icons/bs";
import { AiFillDelete } from 'react-icons/ai';
function MyCart() {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const handleRemove = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };
  
  const totalPrice = cart.reduce((acc, item) => acc += parseInt(item.price)*(item.qty), 0);


  return (
    <Container  style={{marginTop:'65px'}}>
      <Row>
        <Navbars />
      </Row>
      <Row>
        <Col lg={9}>
          {cart.map((item) => {
            return (
              <ListGroup className="my-4">
                <ListGroupItem>{item.name}</ListGroupItem>
                <ListGroupItem>{item.description}</ListGroupItem>
                <ListGroupItem>
                  <img src={item.img} alt="" style={{ width: "200px" }} />
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center"> 
                  <h5>
                Price :<BsCurrencyRupee/>{item.price}</h5> 
                 <Button variant='danger' onClick={()=>{handleRemove(item)}}> remove<AiFillDelete/></Button>
                 </ListGroupItem>
              </ListGroup>
            );
          })}
        </Col>
        <Col  className="my-4 " lg={3} >
        <Col className="bg-dark px-4 py-2" >
        <ListGroup className="  " >
        <h5 className=" text-white text-center py-2">Menu Summary</h5>

                <ListGroupItem>Total Items : {cart.length}</ListGroupItem>
                {cart.map((item,index)=>{
          return( <ListGroupItem key={index}>{item.name} || Qty : {item.qty}</ListGroupItem>)
         })}
              </ListGroup>
              <ListGroup className="my-2">
              
                <ListGroupItem>Total Price : {totalPrice} </ListGroupItem>
              </ListGroup>
              <ListGroup className="my-2">
              
                <ListGroupItem >
                  <Button>Submit Order</Button> </ListGroupItem>
              </ListGroup>
              </Col>
        </Col>
        
      </Row>
    </Container>
  );
}

export default MyCart;
