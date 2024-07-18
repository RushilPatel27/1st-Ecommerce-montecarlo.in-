import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import Categories01 from '../../img/home/category/category-01.webp';
import Categories02 from '../../img/home/category/category-02.webp';
import Categories03 from '../../img/home/category/category-03.webp';
import Categories04 from '../../img/home/category/category-04.webp';
import Categories05 from '../../img/home/category/category-05.webp';

export default function CategoryHome() {
  return (
    <div className='category-home'>
      
        <Container>
            <Row className='justify-content-center'>
                <Col xs sm={3} md={4} lg={2}>
                    
                     <div className='categories-list'>
                        <div className='categories-img'>
                            <Image src={Categories01} className='img-fluid' />
                        </div>

                        <div className='categories-name'>
                           <h5>
                                Men
                           </h5>
                        </div>
                     </div>

                </Col>

                <Col xs sm={3} md={4} lg={2}>
                    
                    <div className='categories-list'>
                       <div className='categories-img'>
                           <Image src={Categories02} className='img-fluid' />
                       </div>

                       <div className='categories-name'>
                          <h5>
                               Women
                          </h5>
                       </div>
                    </div>

               </Col>


               <Col xs sm={3} md={4} lg={2}>
                    
                     <div className='categories-list'>
                        <div className='categories-img'>
                            <Image src={Categories03} className='img-fluid' />
                        </div>

                        <div className='categories-name'>
                           <h5>
                           Kids
                           </h5>
                        </div>
                     </div>

                </Col>

                <Col xs sm={3} md={4} lg={2}>
                    
                     <div className='categories-list'>
                        <div className='categories-img'>
                            <Image src={Categories04} className='img-fluid' />
                        </div>

                        <div className='categories-name'>
                           <h5>
                           Footware
                           </h5>
                        </div>
                     </div>

                </Col>

                <Col xs sm={3} md={4} lg={2}>
                    
                     <div className='categories-list'>
                        <div className='categories-img'>
                            <Image src={Categories05} className='img-fluid' />
                        </div>

                        <div className='categories-name'>
                           <h5>
                           Home Furnishing
                           </h5>
                        </div>
                     </div>

                </Col>


            </Row>
        </Container>

    </div>
  )
}
