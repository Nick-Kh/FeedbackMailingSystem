import React, { Component } from "react";
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { handleToken } from "../../store/actions";

class Payment extends Component {
  render() {
    return (
      <StripeCheckout 
        amount={500}
        name="Emaily"
        description="5$ for 5 survey credits"
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, { handleToken })(Payment);