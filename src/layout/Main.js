import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import LeftSideNav from "../pages/Shared/LeftSiteNav/LeftSideNav";
import RightSideNav from "../pages/Shared/RightSideNav/RightSideNav";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
        <Header></Header>
      <Container>
        <Row>
          <Col lg='2'>
            <LeftSideNav></LeftSideNav>
          </Col>
          <Col lg="7">
            <Outlet></Outlet>
          </Col>
          <Col lg="3">
            <RightSideNav></RightSideNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
