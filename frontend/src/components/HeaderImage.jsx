import {Carousel }from 'react-bootstrap';
import Image from '../constant/Image';
function HeaderImage() {
  return (
    <div className='margin'>
 <Carousel>
      <Carousel.Item >
        <img
          className="  " style={{ width:"100%"}}
          src={Image.image2}
          alt="First slide"
        />
        <Carousel.Caption style={{zIndex:'10'}}>
          <h5>Family Haven</h5>
          <p>The fondest memories are made when gathered around the table</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="  " style={{ width:"100%"}}
          src={Image.image1}
          alt="Second slide"
        />
        <Carousel.Caption style={{zIndex:'10'}} >
          <h5>Flavorsome Delights</h5>
          <p>Life is uncertain. Eat dessert first.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="  " style={{ width:"100%"}}
          src={Image.image3}
          alt="Third slide"
        />
        <Carousel.Caption style={{zIndex:'10'}}> 
          <h5>Tasty Bites and Sip Delights</h5>
          <p>
          When burgers meet delightful drinks, it's a culinary match made in heaven.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    
   
  );
}

export default HeaderImage;