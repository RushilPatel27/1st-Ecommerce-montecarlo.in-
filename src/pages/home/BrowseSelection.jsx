import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import BrowseImgage01 from "../../img/home/browse-selection/01.jpg";
import BrowseImgage02 from "../../img/home/browse-selection/02.jpg";
import BrowseImgage03 from "../../img/home/browse-selection/03.jpg";
import BrowseImgage04 from "../../img/home/browse-selection/04.jpg";
import BrowseImgage05 from "../../img/home/browse-selection/05.jpg";

export default function BrowseSelection() {
  const BrowseProducts = [
    { title: "Men", imageUrl: BrowseImgage01 },
    { title: "Women", imageUrl: BrowseImgage02 },
    { title: "Boys", imageUrl: BrowseImgage03 },
    { title: "Girls", imageUrl: BrowseImgage04 },
    { title: "Home Furnishing", imageUrl: BrowseImgage05 },
  ];

  return (
    <>
      <section className="browse-selection">
        <Container fluid className="px-lg-4">
          <div className="heading-browse text-center">
            <h3>BROWSE OUR CURATED SELECTIONS</h3>
          </div>

          <Row>
            {BrowseProducts.map((product, index) => (
              <Col md={3} lg  key={index}>
                <a href="#">
                  <div className="browse-part text-center">
                    <Image
                      src={product.imageUrl}
                      alt={product.title}
                      className="img-fluid w-100"
                    />
                    <h6>{product.title}</h6>
                  </div>
                </a>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
