import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CollectionImage01 from "../../img/home/collections/c01.webp";
import CollectionImage02 from "../../img/home/collections/c02.jpg";
import CollectionImage03 from "../../img/home/collections/c03.webp";
import CollectionImage04 from "../../img/home/collections/c04.webp";
import CollectionImage05 from "../../img/home/collections/c05.webp";

export default function CollectionHome() {

    const settings = {
        dots: false,
        speed: 2500,
        margin : 10,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,

        nextArrow: (
            <div>
              <div className="next-slick-arrow">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none"><path d="M1.11914 6.66309C0.566856 6.66309 0.119141 7.1108 0.119141 7.66309C0.119141 8.21537 0.566856 8.66309 1.11914 8.66309L1.11914 6.66309ZM22.8622 8.37019C23.2527 7.97967 23.2527 7.3465 22.8622 6.95598L16.4983 0.592017C16.1077 0.201493 15.4746 0.201493 15.084 0.592017C14.6935 0.982542 14.6935 1.61571 15.084 2.00623L20.7409 7.66308L15.084 13.3199C14.6935 13.7105 14.6935 14.3436 15.084 14.7342C15.4746 15.1247 16.1077 15.1247 16.4983 14.7342L22.8622 8.37019ZM1.11914 8.66309C3.45646 8.66309 8.71546 8.66309 13.3901 8.66309C15.7275 8.66309 17.9187 8.66308 19.5256 8.66308C20.3291 8.66308 20.9865 8.66308 21.443 8.66308C21.6712 8.66308 21.8493 8.66308 21.9702 8.66308C22.0307 8.66308 22.0769 8.66308 22.108 8.66308C22.1236 8.66308 22.1354 8.66308 22.1432 8.66308C22.1472 8.66308 22.1502 8.66308 22.1521 8.66308C22.1531 8.66308 22.1539 8.66308 22.1544 8.66308C22.1546 8.66308 22.1548 8.66308 22.1549 8.66308C22.1551 8.66308 22.1551 8.66308 22.1551 7.66308C22.1551 6.66308 22.1551 6.66308 22.1549 6.66308C22.1548 6.66308 22.1546 6.66308 22.1544 6.66308C22.1539 6.66308 22.1531 6.66308 22.1521 6.66308C22.1502 6.66308 22.1472 6.66308 22.1432 6.66308C22.1354 6.66308 22.1236 6.66308 22.108 6.66308C22.0769 6.66308 22.0307 6.66308 21.9702 6.66308C21.8493 6.66308 21.6712 6.66308 21.443 6.66308C20.9865 6.66308 20.3291 6.66308 19.5256 6.66308C17.9187 6.66308 15.7275 6.66309 13.3901 6.66309C8.71546 6.66309 3.45646 6.66309 1.11914 6.66309L1.11914 8.66309Z" fill="#0B0B0B"></path></svg> 
              </div>
            </div>
          ),
      
          prevArrow: (
            <div>
              <div className="next-slick-arrow">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none"><path d="M22.0884 6.66309C22.6407 6.66309 23.0884 7.1108 23.0884 7.66309C23.0884 8.21537 22.6407 8.66309 22.0884 8.66309L22.0884 6.66309ZM0.345295 8.37019C-0.045229 7.97967 -0.0452289 7.3465 0.345295 6.95598L6.70926 0.592017C7.09978 0.201493 7.73295 0.201493 8.12347 0.592017C8.51399 0.982542 8.51399 1.61571 8.12347 2.00623L2.46662 7.66308L8.12347 13.3199C8.51399 13.7105 8.51399 14.3436 8.12347 14.7342C7.73295 15.1247 7.09978 15.1247 6.70926 14.7342L0.345295 8.37019ZM22.0884 8.66309C19.7511 8.66309 14.4921 8.66309 9.8174 8.66309C7.48007 8.66309 5.28882 8.66308 3.6819 8.66308C2.87844 8.66308 2.22107 8.66308 1.76456 8.66308C1.5363 8.66308 1.35826 8.66308 1.23729 8.66308C1.17681 8.66308 1.13058 8.66308 1.09948 8.66308C1.08393 8.66308 1.07216 8.66308 1.06428 8.66308C1.06034 8.66308 1.05736 8.66308 1.05539 8.66308C1.05438 8.66308 1.05367 8.66308 1.05315 8.66308C1.0529 8.66308 1.05271 8.66308 1.05259 8.66308C1.05247 8.66308 1.0524 8.66308 1.0524 7.66308C1.0524 6.66308 1.05247 6.66308 1.05259 6.66308C1.05271 6.66308 1.0529 6.66308 1.05315 6.66308C1.05364 6.66308 1.0544 6.66308 1.05539 6.66308C1.05737 6.66308 1.06034 6.66308 1.06428 6.66308C1.07216 6.66308 1.08393 6.66308 1.09948 6.66308C1.13058 6.66308 1.1768 6.66308 1.23729 6.66308C1.35826 6.66308 1.5363 6.66308 1.76456 6.66308C2.22107 6.66308 2.87844 6.66308 3.6819 6.66308C5.28882 6.66308 7.48007 6.66309 9.8174 6.66309C14.4921 6.66309 19.7511 6.66309 22.0884 6.66309L22.0884 8.66309Z" fill="black"></path></svg>
              </div>
            </div>
          ),
      };

  return (
    <>
      <div className="collection-section">
        <Container fluid className="px-lg-4">
          <Row className="align-items-center">
            <Col lg={3} md={4}>
              <div className="collection-info">
                <h2>
                  Unleash Your
                  <br />
                  Inner Fashionista
                </h2>

                <p>
                  Discover the trendiest pieces <br /> handpicked just for you
                </p>
              </div>
            </Col>

            <Col lg={9} md={8}>
              <div className="slick-carousel-part">
                <Slider {...settings}>
                  <div className="collection-img-slick">
                    <a href="#">
                      <div className="slick-img-part">
                        <Image
                          src={CollectionImage01}
                          className="img-fluid w-100"
                        />
                        <h2>Tops</h2>
                      </div>
                      <p>Shop Now</p>
                    </a>
                  </div>

                  <div className="collection-img-slick">
                    <a href="#">
                      <div className="slick-img-part">
                        <Image
                          src={CollectionImage02}
                          className="img-fluid w-100"
                        />
                        <h2>Coats</h2>
                      </div>
                      <p>Shop Now</p>
                    </a>
                  </div>

                  <div className="collection-img-slick">
                    <a href="#">
                      <div className="slick-img-part">
                        <Image
                          src={CollectionImage03}
                          className="img-fluid w-100"
                        />
                        <h2>Jackets</h2>
                      </div>
                      <p>Shop Now</p>
                    </a>
                  </div>

                  <div className="collection-img-slick">
                    <a href="#">
                      <div className="slick-img-part">
                        <Image
                          src={CollectionImage04}
                          className="img-fluid w-100"
                        />
                        <h2>T-shirts</h2>
                      </div>
                      <p>Shop Now</p>
                    </a>
                  </div>

                  <div className="collection-img-slick">
                    <a href="#">
                      <div className="slick-img-part">
                        <Image
                          src={CollectionImage05}
                          className="img-fluid w-100"
                        />
                        <h2>Tops</h2>
                      </div>
                      <p>Shop Now</p>
                    </a>
                  </div>
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="mark-img">
        <Image
          src="https://cdn.shopify.com/s/files/1/0761/3674/3200/files/Vector_36.png?v=1687287605"
          loading="lazy"
        />
      </div>

      </div>

      <hr className="mt-4" />

      
    </>
  );
}
