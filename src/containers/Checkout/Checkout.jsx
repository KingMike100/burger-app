import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Route, Redirect } from "react-router-dom";
import ContactData from "./ContactData/ContactData";
import { connect } from "react-redux";
class Checkout extends Component {
  // state = {
  //   ingredients: null,
  //   totalPrice: 0
  // };

  componentWillMount() {
    // const query = new URLSearchParams(this.props.location.search);
    // const ingredients = {};
    // let price = 0;
    // for (let param of query.entries()) {
    //   if (param[0] === "price") {
    //     price = param[1];
    //   } else {
    //     ingredients[param[0]] = +param[1];
    //   }
    // }
    // this.setState({ ingredients: ingredients, totalPrice: price });
    // console.log("query" + query);
  }
  render() {
    let summary = <Redirect to="/" />;
    if (this.props.ingredients) {
      const purchasedRedirect = this.props.purchased ? (
        <Redirect to="/" />
      ) : null;
      summary = (
        <div>
          {purchasedRedirect}
          <CheckoutSummary
            ingredients={this.props.ingredients}
            continue={this.continue}
            cancel={this.cancel}
          />
          <Route
            path={this.props.match.url + "/contact-data"}
            component={ContactData}
            // render={() => (
            //   <ContactData
            //     ingredients={this.props.ingredients}
            //     price={this.props.totalPrice}
            //   />

            // )}
          />
        </div>
      );
    }
    return <div>{summary}</div>;
  }

  continue = () => {
    this.props.history.replace("/checkout/contact-data");
  };
  cancel = () => {
    this.props.history.goBack();
  };
}
const mapStateToProps = state => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    purchased: state.order.purchased
  };
};

export default connect(mapStateToProps)(Checkout);
