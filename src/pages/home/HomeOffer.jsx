import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import OfferImg01 from '../../img/home/offer/summer.webp';
import OfferImg02 from '../../img/home/offer/winter.webp';

export default function HomeOffer() {
  return (

    <>
    <div className="home-offer-section">
      <Container fluid className='px-xl-4'>
        <Row>
          <Col lg={6}>
            <div className="offer-sixx-mode">
              <h3>FLIRTING WITH SUMMER</h3>
              <p>Checkout offers and deals on summer staples</p>

              <div className="offer-image">
                <Image src={OfferImg01} className='img-fluid w-100' />

                <a href="#" className="btn">
                  Shop Now
                </a>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="offer-sixx-mode">
              <h3>GET COZY WITH WINTER FAVOURITES</h3>
              <p>Checkout offers and deals on winter staples</p>

              <div className="offer-image">
                <Image src={OfferImg02} className='img-fluid w-100' />

                <a href="#" className="btn">
                  Shop Now
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

    
        <hr />
   
    </>
  );
}
