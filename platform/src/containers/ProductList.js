import React, { Component } from 'react';
import { connect } from 'react-redux';
import Screen  from '../components/Screen/Screen';
import { fetchProducts } from '../actions/index';

class ProductList extends Component {

  componentDidMount() {
    this.props.fetch();
  }

  renderProducts() {
    return this.props.productList.map((product) => {
      return (
          <li key={product.id}><Screen productData={product}/></li>
      );
    });
  }

  render () {
    return (
      <div>
        <h2>모임 리스트</h2>
        <ul>
          {this.renderProducts()}
        </ul>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    productList: state.lists.productList
  };
}, { fetchProducts })(ProductList);