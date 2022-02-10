import React from "react";
import { Col, Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";

function App() {
  let productInfo = {title: "Product List"} ;  
  let categoryInfo = {title: "Category List"} ;
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList info={categoryInfo} />
          </Col>
          <Col xs="9">
            <ProductList info={productInfo}  />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
