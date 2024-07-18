import React from 'react';
import {Container, Row, Col, Image, Navbar, Nav} from 'react-bootstrap';
import '../css/header.css'
import wishlist from '../img/icon/wishlist.png';
import login from '../img/icon/sign-in.png';
import TrackOrder from '../img/icon/tracking.png';
import search from '../img/icon/magnifying-glass.png';
import cart from '../img/icon/shopping-bag.png';

export default function Header() {
  return (
    <div>
    <div className='top-header'>
        <Container fluid className='px-xl-4'>
            <Row className='align-items-center'> 
                <Col md={12} lg={6}>
                   <div className='brand-name-logo'>
                    <img src='https://www.montecarlo.in/cdn/shop/files/Vector_37_300x.png' className='img-fluid' style={{maxWidth: "150px"}} />
                   </div>
                </Col>

                <Col md={12} lg={6}>
                
                <ul className='icon-flex float-end'>
                        <li className='wishlist'>
                        <a href="#">
                            <span className='icon'>
                           <Image src={wishlist} className='img-fluid icon-img' />
                            </span>
                            <span className='icon-title'>
                            Wishlist
                            </span>
                        </a>
                        </li>
                                
                    <li className='login'>
                        <a href="#">
                            <span className='icon'>
                            <Image src={login} className='img-fluid icon-img' />
                            </span>
                            <span className='icon-title'>
                            Login/Signup
                            </span>
                        </a>
                        </li>
                                
                        <li className='track-order'>
                        <a href="#">
                            <span className='icon'>
                            <Image src={TrackOrder} className='img-fluid icon-img' />
                            </span>
                            <span className='icon-title'>
                            Track Order
                            </span>
                        </a>
                        </li>
                    </ul>

                </Col>

            </Row>
        </Container>
    </div>
  
   <div className='navbar-part'>

    <Container fluid className='px-xl-4'>
        <Row>
            <Col md={12} lg={9}>
               <Navbar id="myMenu">
                    <Nav className="mx-auto text-center">
                        <Nav.Link href="#">MEN</Nav.Link>
                        <Nav.Link href="#">WOMEN</Nav.Link>
                        <Nav.Link href="#">KIDS</Nav.Link>
                        <Nav.Link href="#">Footwear</Nav.Link>
                        <Nav.Link href="#">HOME FURNISHING</Nav.Link>
                        <Nav.Link href="#">ACTIVE WEAR</Nav.Link>
                        <Nav.Link href="#">Gift Card</Nav.Link>
                    </Nav>
                </Navbar>
            </Col>

            <Col md={12} lg={3}>

                <ul className='second-link-bar icon-flex float-end'>
                    <li>
                        <a href=''>
                            <Image src={search} className='img-fluid icon-img' /> Search
                        </a>
                    </li>
                    <li>
                        <a href=''>
                        <Image src={cart} className='img-fluid icon-img' /> 
                        <span className='counter-cart'> 0 </span> Cart
                        </a>
                    </li>
                </ul>
            
            </Col>
        </Row>
    </Container>

   </div>
 
</div>
  )
}
