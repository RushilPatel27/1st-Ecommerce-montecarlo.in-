import {React, useEffect, useState} from 'react'
import { Col, Row, Container, Image } from 'react-bootstrap';
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import instSign from "../../src/img/instagram/montecarlostyle_1.webp";
import instImg01 from "../../src/img/instagram/01.jpg";
import instImg02 from "../../src/img/instagram/02.jpg";
import instImg03 from "../../src/img/instagram/03.jpg";
import instImg04 from "../../src/img/instagram/04.jpg";
import instImg05 from "../../src/img/instagram/05.jpg";

export default function Instagram() {
  
   const InstagramFeeds = [
     {instgramImage :instImg01},
     {instgramImage :instImg02},
     {instgramImage :instImg03},
     {instgramImage :instImg04},
     {instgramImage :instImg05},
   ]

   const [feeds, setFeeds] = useState(InstagramFeeds);

   const socialMediaLinks = [
    {
      platformIcon: <BsFacebook />,
      url: 'https://www.facebook.com/montecarlocollections',
      ariaLabel: 'Follow us on Facebook',
    },
    {
      platformIcon: <BsInstagram />,
      url: 'https://www.instagram.com/montecarlostyle/',
      ariaLabel: 'Follow us on Instagram',
    },
    {
      platformIcon: <BsTwitter />,
      url: 'https://twitter.com/montecarlostyle',
      ariaLabel: 'Follow us on Twitter',
    },
   ];

   const [links, setLinks] = useState(socialMediaLinks);

  //  const SocialMediaList = () => {
  //   const [links, setLinks] = useState(socialMediaLinks); 
  //  }

    var settings = {
        dots: false,
        nav: true,
        margin : 10,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: (
            <div>
              <div className="next-slick-arrow"></div>
            </div>
          ),
      
          prevArrow: (
            <div>
              <div className="next-slick-arrow"></div>
            </div>
          ),
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
      };
  return (
    <>
      <section id="insta-feed" className='pb-5'>
        <Container fluid className="px-xl-4">
         
        <div className="custom_img">
          <div className="img_">
            <Image src={instSign} />
          </div>
          <div className="social_txt">
          <div className="title">Follow us on social media</div>
            <div className="ico">
               <ul className="social-media list--unstyled" role="list">
                {links.map((link, index) => (
                  <li key={index} className='social-media__item'>
                      <a href={link.url} target='_blank' className="social-media__link" aria-label={link.ariaLabel}>
                      {link.platformIcon}
                      </a>
                  </li>
                ))}
                   
               </ul>
           </div> 

          </div>  
        </div>

            <Row className='justify-content-center'>
                <Col md="12" lg="12">

                <Slider {...settings}>
                  {InstagramFeeds.map((product, index) => (
                    <div className='insta-feed-part' key={index}>
                        <Image src={product.instgramImage} className='img-fluid' />
                    </div>
                  ))}
                </Slider>

                </Col>

            </Row>
        </Container>
      </section>
    </>
  )
}
