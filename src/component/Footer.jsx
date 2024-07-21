import {React, useState, useEffect} from 'react'
import { Container,Row,Col } from 'react-bootstrap'

export default function Footer() {

    const FooterLinksColl = [
        {
            linkTitle : 'Men',
            linkUrl: 'www.google.com',
       },
       {
        linkTitle : 'Women',
        linkUrl: 'www.google.com',
        },
        {
            linkTitle : 'Kids',
            linkUrl: 'www.google.com',
        },
        {
            linkTitle : 'Activewear',
            linkUrl: 'www.google.com',
        },
        {
            linkTitle : 'Winter Collection',
            linkUrl: 'www.google.com',
        },
        {
            linkTitle : 'Summer Collection',
            linkUrl: 'www.google.com',
        },
        {
            linkTitle : 'Home Furnishing',
            linkUrl: 'www.google.com',
        },
    ]

    const [linksCollection, setLinksCollection] = useState(FooterLinksColl)

  return (
    <footer class="footer">
      <Container fluid className='px-xl-4'>

        <div  className='footer__item-list'>
        <Row>
            <Col md={6} lg={3}>

            <div className='footer__item'>

                <h5 className='links-title'>COLLECTIONS</h5>

                <ul className='linklist list--unstyled'>
                  {linksCollection.map((link, index) => [
                      <li key={index} class="linklist__item">
                         <a href={link.linkUrl} class="link--faded">{link.linkTitle}</a>
                      </li>
                  ])}

                </ul>

            </div>
              
            </Col>

            <Col md={6} lg={3}>

                <div className='footer__item'>

                    <h5 className='links-title'>INFORMATION</h5>

                    <ul className='linklist list--unstyled'>
                    {linksCollection.map((link, index) => [
                        <li key={index} class="linklist__item">
                            <a href={link.linkUrl} class="link--faded">{link.linkTitle}</a>
                        </li>
                    ])}

                    </ul>

                </div>
            
            </Col>
        </Row>
        </div>
       
      </Container>
    </footer>
  )
}
