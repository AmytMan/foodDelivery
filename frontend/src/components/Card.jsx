import React, { useEffect, useRef, useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import { CartState } from "../context/Context";
import {BsCurrencyRupee} from 'react-icons/bs';
function Cards(props) {
  const priceRef = useRef();

  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(null);
  const { name, CategoryName, img, description, _id, options } = props.data;
  const option = options[0];
  const totalprice = qty * parseInt(price);
  useEffect(() => {
    setPrice(priceRef.current.value);
  });

  const handleAdd = () => {   
      dispatch({
        type: "ADD_TO_CART",
        payload: { name, _id, CategoryName, img, description, qty, price },
      });
  };
  const handleRemove = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: props.data });
  };
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <>
      <Card style={{ width: "26rem" ,height:'670px' }}>
        <Card.Img variant="top" src={img} style={{height:"200px"}} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{CategoryName}</Card.Text>
          <Card.Text>{description}</Card.Text>

          <Form>
            <Form.Select
              className=" my-4"
              onChange={(e) => setQty(e.target.value)}
            >
              {Array.from(Array(6), (_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </Form.Select>

            <Form.Select
              ref={priceRef}
              onChange={(e) => setPrice(e.target.value)}
            >
              {Object.entries(option).map(([key, value]) => (
                <option key={key} value={value}>
                  {key}
                </option>
              ))}
            </Form.Select>
            <h6 className="my-2">Price: <BsCurrencyRupee/>{totalprice}</h6>
          </Form>

          <hr />
          {cart.some((p) => p._id == props.data._id) ? (
            <Button variant="danger" onClick={handleRemove}>
              Remove From Cart
            </Button>
          ) : (
            <Button variant="success" onClick={handleAdd}>
              Add to Cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
}

export default Cards;
