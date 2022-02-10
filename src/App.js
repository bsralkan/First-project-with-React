import React from "react";
import { Col, Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList title="Category List" />
          </Col>
          <Col xs="9">
            <ProductList title="Product List"  />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
