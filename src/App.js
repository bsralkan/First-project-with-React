import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";

export default class App extends Component {
  state = {
    currentCategory: "", products:[], cart:[]
  };  

  changeCategory = (category) => {
    this.setState({currentCategory: category});
    this.getProducts(category.id);
  }

  getProducts = (seoUrl) => {
    let url = 'http://localhost:3000/products';
    if(seoUrl){
      url += "?categoryId=" + seoUrl;
    }
    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({products: data}));
  }

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(c => c.product.id===product.id);
    if(addedItem){
      addedItem.quantity += 1;
    }else{
      newCart.push({product:product, quantity:1});
    }
    this.setState({cart:newCart});
  }
  
  componentDidMount(){
    this.getProducts();
  }

  render() {
    let productInfo = {title: "Product List"} ;  
    let categoryInfo = {title: "Category List"} ;
    return (
      <div>
        <Container>
            <Navi cart={this.state.cart} />
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
            </Col>
            <Col xs="9">
              <ProductList products={this.state.products} addToCart={this.addToCart} currentCategory={this.state.currentCategory} info={productInfo}  />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
