import Cards from "./Card";
import React, {  useEffect, useState } from "react";
import { Button, Container, Row, Col, Form, Card } from "react-bootstrap";

import Navbars from "./Navbar";
import Collections from "./Collections";
import axios from "axios";
function Body() {
  const [search, setSearch] = useState("");
  const [foodData, setfoodData] = useState("");
  const [categoryData, setCategory] = useState("");

 
  useEffect(()=>{
    const fetchFood = async ()=>{
      try {
        const response = await axios.get('http://localhost:5000/api/foodData')
        const data = response.data
        setfoodData(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchFood()
  },[])

  useEffect(()=>{
    const fetchCategory = async ()=>{
      try {
        const response = await axios.get('http://localhost:5000/api/category')
        const data = response.data
        setCategory(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCategory()
  },[])
  

  return (
    <Container-Fluid>
        <Row>
            <Navbars/>
        </Row>
      <Row className="my-5">
        <Col className=" text-info bg-dark p-3 my-5 mx-auto" lg={6}>
          <input
            value={search}
            type="text"
            placeholder="search..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </Col>
      </Row>
      <Row className="my-4">
        <Col lg={3} className="my-4">
            <div className="bg-dark text-white">
               <Collections/>
            </div>
        </Col>
        <Col lg={9}>
        {categoryData ? (
          categoryData.map((cat, index) => {
            return (
              <Row key={index} className="my-4 ">
                <h4>{cat.category}</h4>
                <hr />
                {foodData ? (
                  foodData
                    .filter(
                      (item) =>
                        item.CategoryName === cat.category &&
                        item.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((filtereditem, index) => {
                      return (
                        <Col className="my-4" key={index}>
                          <Cards data={filtereditem} />
                        </Col>
                      );
                    })
                ) : (
                  <div>Food LOADING ...</div>
                )}
              </Row>
            );
          })
        ) : (
          <div>Category Loading...</div>
        )}
        </Col>
      </Row>
    </Container-Fluid>
  );
}

export default Body;
