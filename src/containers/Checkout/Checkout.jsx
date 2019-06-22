import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary";
class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 3
    }
  };
  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (let param of query.entries()) {
      ingredients[param[0]] = +param[1];
    }
    this.setState({ ingredients: ingredients });
    console.log("query" + query);
  }
  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          continue={this.continue}
          cancel={this.cancel}
        />
      </div>
    );
  }

  continue = () => {
    // alert("you continue");
    this.props.history.replace("/checkout/contact-data");
  };
  cancel = () => {
    console.log(this.props);
    // alert("you cancel");
    this.props.history.goBack();
  };
}

export default Checkout;
