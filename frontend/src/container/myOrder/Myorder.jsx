import React from 'react';
import { CartState } from '../../context/Context';
import { Link } from 'react-router-dom';
import {SlBag} from 'react-icons/sl'
import { Badge, Button,Container, NavDropdown  } from 'react-bootstrap';
import Image from '../../constant/Image';

function Myorder() {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
   <div>
      <Container>
     

          <NavDropdown 
          align='end'
          title={ <span><SlBag color='black' fontSize="25px" /><Badge as='sup'>{cart.length}</Badge></span>}>

            <NavDropdown.Item >
                            
              {cart.length > 0 ? (
                <div>
                  <Link to='/mycart'>
                  <Button variant='success' className='mx-2'>view order</Button>
                  </Link>

                  {cart.map((item, index) => (
                    <div key={index} className='d-flex justify-content-between align-items-center mx-2 p-2'>
                 
                  <h6 className='text-nowrap '>{item.name}</h6>                  
                    <img src={item.img} alt=""  style={{width:"120px"}}/> 
                 
                 


                      
                    
                      
                  </div>
                  ))}
                 
                 
                  
                 
                </div>
                              

              ) : (
                
                <div className='p-2 back' >
                   <strong >Your bag is empty.</strong>Add items to get started.</div>
              )}
            
            </NavDropdown.Item>
          </NavDropdown>
      </Container>
      </div>
  );
}

export default Myorder;
