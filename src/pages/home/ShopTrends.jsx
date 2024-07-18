import React from 'react'
import { Col, Container, Image, Row, Tab, Tabs, OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import wishlist from '../../img/icon/wishlist.png';
import TrendsImg01 from '../../img/home/shoptrends/01.webp';
import TrendsImgHov01 from '../../img/home/shoptrends/01-hover.webp';
import TrendsImg02 from '../../img/home/shoptrends/02.webp';
import TrendsImgHov02 from '../../img/home/shoptrends/02-hover.webp';
import TrendsImg03 from '../../img/home/shoptrends/03.webp';
import TrendsImgHov03 from '../../img/home/shoptrends/03-hover.webp';
import TrendsImg04 from '../../img/home/shoptrends/04.webp';
import TrendsImgHov04 from '../../img/home/shoptrends/04-hover.webp';

export default function ShopTrends() {

  const TreadingProduct = [
    { title: "Men Blue Solid Slim Fit Denim", imageUrl: TrendsImg01, hoverImageUrl:TrendsImgHov01, price: "2,699.00" },
    { title: "Men Blue Solid Straight Fit Denim", imageUrl: TrendsImg02, hoverImageUrl:TrendsImgHov02,  price: "3,099.00"  },
    { title: "Men Blue Solid Skinny Fit Denim", imageUrl: TrendsImg03, hoverImageUrl:TrendsImgHov03,  price: "3,499.00"   },
    { title: "Men Grey Solid Skinny Fit Denim", imageUrl: TrendsImg04, hoverImageUrl:TrendsImgHov04,  price: "2,299.00"   },
  ]

  return (
    <>
      <section className="shoptrends-section">
        <Container fluid className="px-xl-4">
          <Row>
            <Col lg={12}>
              <div className="heading-shoptrends">
                <h3>SHOP TRENDS</h3>
                <p>Check out our hot selling and trending products</p>
              </div>
            </Col>

            <Col lg={12}>
              <Tabs
                defaultActiveKey="BestTab"
                id="justify-tab-example"
                className="mb-3 border-0"
                justify
              >
                <Tab eventKey="BestTab" title="Best selling">
                  <Row>
                    {TreadingProduct.map((product, index) => (
                      <Col lg={3} md={6} key={index}>

                        <div className='shoptrends-product'>
                            <div className='shoptrends-normal'>

                                {/* <Image src={product.imageUrl} alt={product.title} /> */}
                                <Image src={product.imageUrl} alt={product.title} className='img-fluid w-100 normal-show' />
                                <Image src={product.hoverImageUrl} alt={product.title} className='img-fluid w-100 hover-show' />
                                <div className='wishlist' style={{cursor : "pointer"}}>

                                <OverlayTrigger
                                    key='top'
                                    placement='top'
                                    overlay={
                                        <Tooltip id='tooltip-top'>
                                        Add to Wishlist
                                        </Tooltip>
                                    }
                                    >
                                        <Image src={wishlist} style={{width:"20px", height:"20px"}} />
                                </OverlayTrigger>

                                   
                                </div>

                                <div className='quick-view-part'>
                                  <Button type='button' className='quick-button' variant="">Quick view</Button>
                                </div>

                            </div>

                            <div className='shoptrends-text'>
                                  <h6>{product.title}</h6>
                                  <h4>Rs. {product.price}</h4>
                            </div>
                        </div>

                      </Col>
                    ))}
                  </Row>
                </Tab>
                <Tab eventKey="NewTab" title="New Arrival">
                <Row>
                    {TreadingProduct.map((product, index) => (
                      <Col lg={3} md={6} key={index}>

                        <div className='shoptrends-product'>
                            <div className='shoptrends-normal'>

                                {/* <Image src={product.imageUrl} alt={product.title} /> */}
                                <Image src={product.imageUrl} alt={product.title} className='img-fluid w-100 normal-show' />
                                <Image src={product.hoverImageUrl} alt={product.title} className='img-fluid w-100 hover-show' />
                                <div className='wishlist' style={{cursor : "pointer"}}>

                                <OverlayTrigger
                                    key='top'
                                    placement='top'
                                    overlay={
                                        <Tooltip id='tooltip-top'>
                                        Add to Wishlist
                                        </Tooltip>
                                    }
                                    >
                                        <Image src={wishlist} style={{width:"20px", height:"20px"}} />
                                </OverlayTrigger>

                                   
                                </div>

                                <div className='quick-view-part'>
                                  <Button type='button' className='quick-button' variant="">Quick view</Button>
                                </div>

                            </div>

                            <div className='shoptrends-text'>
                                  <h6>{product.title}</h6>
                                  <h4>Rs. {product.price}</h4>
                            </div>
                        </div>

                      </Col>
                    ))}
                  </Row>
                </Tab>
                <Tab eventKey="TopTab" title="Top Trending">
                <Row>
                    {TreadingProduct.map((product, index) => (
                      <Col lg={3} md={6} key={index}>

                        <div className='shoptrends-product'>
                            <div className='shoptrends-normal'>

                                {/* <Image src={product.imageUrl} alt={product.title} /> */}
                                <Image src={product.imageUrl} alt={product.title} className='img-fluid w-100 normal-show' />
                                <Image src={product.hoverImageUrl} alt={product.title} className='img-fluid w-100 hover-show' />
                                <div className='wishlist' style={{cursor : "pointer"}}>

                                <OverlayTrigger
                                    key='top'
                                    placement='top'
                                    overlay={
                                        <Tooltip id='tooltip-top'>
                                        Add to Wishlist
                                        </Tooltip>
                                    }
                                    >
                                        <Image src={wishlist} style={{width:"20px", height:"20px"}} />
                                </OverlayTrigger>

                                   
                                </div>

                                <div className='quick-view-part'>
                                  <Button type='button' className='quick-button' variant="">Quick view</Button>
                                </div>

                            </div>

                            <div className='shoptrends-text'>
                                  <h6>{product.title}</h6>
                                  <h4>Rs. {product.price}</h4>
                            </div>
                        </div>

                      </Col>
                    ))}
                  </Row>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
