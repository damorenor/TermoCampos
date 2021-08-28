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
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import Home from "views/Home.js";
import OurCompany from "views/pages/OurCompany.js";
import Contact from "views/pages/Contact.js";
import Services from "views/pages/Services.js";
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route
        path="/home"
        render={(props) => <Home {...props} />}
      />
      <Route
        path="/servicios"
        render={(props) => <Services {...props} />}
      />
      <Route
        path="/nosotros"
        render={(props) => <OurCompany {...props} />}
      />
      <Route
        path="/contacto"
        render={(props) => <Contact {...props} />}
      />
      <Redirect to="/home" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
