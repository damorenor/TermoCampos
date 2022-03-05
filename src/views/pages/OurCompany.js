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

function OurCompany() {
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
      <PagesHeader source={"http://termoformadoscampos.imgix.net/nosotros.jpg?fit=crop&crop=focalpoint&fp-x=.5&fp-y=.2&fp-z=1.5"}/>
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/mainlogo.svg").default}
              />
            </div>
            <div className="name">
              <h2 className="title">
                Termoformados Campos <br />
              </h2>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <h6 className="description">¿Quienes somos?</h6>
              <p>
                Garantizamos la satisfacción del cliente, el bienestar de nuestros grupos
                de interés promoviendo la mejora continua, cumpliendo con todos los requerimientos
                legales aplicables, los requisitos establecidos por los clientes
                y aquellos acuerdos suscritos por la organización.
              </p>
              <br />
            </Col>
          </Row>
          <br />
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <h6 className="description">Nuestra Misión</h6>
              <p>
                Contribuir con nuestros clientes ofreciendo soluciones innovadoras apoyando en la
                presentación y protección de sus productos que permitan incrementar sus ventas con
                un equipo de trabajo idóneo y experimentado, apuntando a la mejora continua de la
                empresa hasta alcanzar la excelencia.
              </p>
              <br />
            </Col>
            <Col className="ml-auto mr-auto text-center" md="6">
              <h6 className="description">Nuestra Visión</h6>
              <p>
                En el corto plazo seremos una empresa sostenible y responsable con el medio ambiente,
                con un equipo humano comprometido con la excelencia y reconocida por los clientes
                contribuyendo a la generación de valor agregado en sus productos.

              </p>
              <br />
            </Col>
          </Row>
          <br />
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <img
                  alt="..."
                  className="img-rounded img-responsive"
                src={"http://termoformadoscampos.imgix.net/produccion14.jpg"}
                />
            </Col>
          </Row>
          <br />
        </Container>
      </div>
      <HomeFooter />
    </>
  );
}

export default OurCompany;
