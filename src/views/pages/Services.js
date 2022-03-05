/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import HomeNavbar from "components/Navbars/HomeNavbar.js";
import PagesHeader from "components/Headers/PagesHeader.js";
import HomeFooter from "components/Footers/HomeFooter.js";
import ServiceCard from "components/Cards/ServiceCard";
import { services } from "./service_info";

function Services() {

  const serviceComponent = services.map((service,i) =>{
    return <ServiceCard key={i} service={services[i]}/>
  })

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <HomeNavbar />
      <PagesHeader source={"http://termoformadoscampos.imgix.net/produccion18.jpg"}/>
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="name">
              <h2 className="title">
                Servicios <br />
              </h2>
            </div>
          </div>
          <Row>
            <Col className="ml-aut mr-auto text-center">
              <p>En Termoformados Campos elaboramos empaques, envases y embalajes de
              plástico para favorecer la manipulación, contención, protección, almacenamiento,
              distribución y exhibición de los productos de nuestros clientes de acuerdo a sus necesidades. </p>
            </Col>
          </Row>
          {serviceComponent}
        </Container>
      </div>
      <HomeFooter />
    </>
  );
}

export default Services;
