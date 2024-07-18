import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Video01 from '../../video/home-video.mp4';

export default function VideoHome() {
  return (
    <>
      <section className='video-section'>
         <Container fluid className='px-xl-4'>
            <Row>
                <Col>
                    <h5 className='text-center fw-bolder mb-3'>Monte Carlo E-Gift Card</h5>

                    <div class="section-video">
                        <video autoPlay muted loop playsInline className="custom-video" controls>
                            <source src={Video01} type="video/mp4" />
                        </video>
                    </div>
                </Col>
            </Row>
         </Container>
      </section>
    </>
  )
}
