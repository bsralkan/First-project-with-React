import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

  export default class CategoryList extends Component {
  state = {
      categories: [],
      currentCategory: ""
    };

  componentDidMount(){
    this.getCategories();
  }

  getCategories = () => {
    fetch('http://localhost:3000/categories')
    .then(response => response.json())
    .then(data => this.setState({categories: data}));
  }

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem active={this.props.currentCategory.categoryName===category.categoryName?true:false} 
            onClick={() => this.props.changeCategory(category)} key={category.id}>{category.categoryName}</ListGroupItem>
          ))}
        </ListGroup>
        {/* <h3>{this.props.currentCategory.categoryName}</h3> */}
      </div>
    );
  }
}
