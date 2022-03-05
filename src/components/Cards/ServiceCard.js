import React from 'react'
import {
  Row,
  Col,
} from "reactstrap";

const ServiceCard = (props) => {
  const {name, description,img} = props.service;
  return(
      <Row className="mt-5">
        <Col className="ml-auto mr-auto " md="6">
          <h6 className="description">{name}</h6>
          <p>
            {description}
          </p>
          <br />
        </Col>
        <Col className="ml-auto mr-auto" md="6">
          <img
              alt="..."
              className="img-rounded img-responsive"
              src={img}
            />
        </Col>
      </Row>
  );
}

export default ServiceCard;
