import {React, useState, useEffect} from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

export default function About() {

    const [isTextShown, setIsTextShown] = useState(false);

    const toggleText = () => {
      setIsTextShown(!isTextShown);
    };

  return (
    <section className='pb-5'>

        <Container fluid className='px-xl-4'>
            <Row>
                <Col md={12}>

                <div class="heading-shoptrends mb-4"> <h3 className='text-center'>ABOUT US</h3> </div>
                     <div className='about-text'>
                       
                            <p style={{textAlign: 'justify'}}>
                                One of the largest legacy brands, we at Monte Carlo offer a seamless online shopping experience for men, women, kids, and home furnishing products at prices to go gaga. The perfect online space for fast-fashion readymade statement pieces, experience the trendiest fashion products, available at your doorstep with a mouse click. Explore the widest range of Monte Carlo brand Men, Women, Kids, and Home furnishing products at the best prices. At Monte Carlo, we offer easy and hassle-free payment options with secure checkout options, as all our data our end-to-end encrypted with zero percent chance of data loss & theft. Customers have the option to pay for delivery by cash when shopping at the Monte Carlo online store.  
                               
                                {/* <a href="javascript:void(0)" className='moreless-button' style={{ fontWeight: 700, color: '#000' }} onClick={toggleText}> {isTextShown ? 'Read less' : 'Read more'} </a> */}
                           
                            </p>

                            {isTextShown && (
                            <div className='about-more-text'>
                                <h6>One-Stop Destination For All Your Fashion Needs</h6>

                                <p>
                                At Monte Carlo, shopping for modern clothing for men, women, and kids is walk in the park. With the widest range of modern hues and choices, everyone can feel like a fashionista when shopping fashion essentials online at the Monte Carlo brand. Whether be it summer or winter, you can fill your shopping cart with exclusive ranges of Monte Carlo jackets at amazing prices. <br />
                                When the sun hits you in summers, we offer best deals on our finest ranges of Monte Carlo t-shirts for you to fullfill your summer desire while slaying the season in style and comfort. Our designers at Monte Carlo crafts staples with a perfect ratio of style & comfortability, keeping in mind the needs of modern personas as per different age range of shoppers.
                                </p>

                                <p>
                                Dressing for every weather & occasion is a breeze as we have the perfect staples. For hot & cold temperatures, our range serves you well with tons of choices available for Monte Carlo Women T-shirts, Women Tops, Women Jackets, Women Shorts, Ladies Sweatshirts, Women Tracksuits, Boys Thermal Wear, Boy Sweaters, and More. You don't need to switch platforms when nature tries to play the switch game. Everything is available at your fingertips at exclusive prices.
                                </p>

                                <h6>Shop Men's Clothing Range at Monte Carlo</h6>

                                <p>
                                Your anxious Google search for 'best online shopping platforms in India' ends at Monte Carlo. We, the legacy brand, are catering to all your fashion needs since 1984. With more than 40+ years of crafting genuine clothing products, there's a different fashion word to explore for men, women shopping for staples for occasional or everyday purposes. <br />
                                At Monte Carlo, you can take a chill pill from the worldy tensions and smartly choose for products that cater to your personal style, designs that match your personality, so that you always stand out with a confident smile on your face. With extensive category of Men Shirts, Men T-shirts, Men Trousers, Men Sweaters, Men Jackets, Men Sweatshirts, Men Coats, Men Denims, and Much More, you don't need to feel lost within an infinite space of countless of products, as our products are crafted by our designers keeping in mind the different personas of the modern man. <br />
                                With an option to pay on delivery, you can easily order home your favourites at no extra cost attached. Whether shopping for a dinner party or office formalwear, we have a pool of staples that cater to varied age range of men. Don't miss out on our legacy - Monte Carlo jackets, when the winter are at peak and you are in need of something cozy yet stylish enough to keep match your status quota.
                                </p>

                                <h6>No More Slow Loading with Monte Carlo App</h6>

                                <p>Sometimes due to low internet connectivity, it could be a bit difficult to browse your favourites using inbuilt browsers. Bringing the future to you, Monte Carlo app makes shopping online a piece of cake with easy checkouts and no payment errors. With easy-to-use user interface and no-glitch platform, shopping is fun at the Monte Carlo app. Made for Android and iOS, we promise a buttery smooth process while shopping for your fashion favourites. 

                                {/* <a href="#" className='moreless-button' style={{ fontWeight: 700, color: '#000' }} onClick={toggleText}> Read less </a> */}
                                </p>
                            </div>
                            )}
                            <div className='text-center'>
                                <Button variant="primary" className='moreless-button px-4 py-2' style={{ fontWeight: 700, backgroundColor: '#25306e', borderColor: '#25306e'}} onClick={toggleText}> {isTextShown ? 'Read less' : 'Read more'}
                                </Button>
                            </div>
                        

                    </div>
                 
                </Col>
            </Row>
        </Container>
      
    </section>
  )
}
