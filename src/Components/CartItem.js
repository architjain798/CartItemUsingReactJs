import React from "react";
import ReactDOM from "react-dom";
import "../Styling/Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faMinusCircle,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      MobileName: "Xiomi",
      Price: "Rs 9999",
      Qty: 1
    };
  }

  IncreaseQty = () => {
    this.setState({ Qty: 1 + this.state.Qty });
  };

  DecreaseQty = () => {
    if (this.state.Qty > 0) this.setState({ Qty: this.state.Qty - 1 });
  };

  render() {
    const { MobileName, Price, Qty } = this.state;
    return (
      <div className="container">
        <div className="left-div box"></div>
        <div className="right-div box">
          <h2 className="heading">{MobileName}</h2>
          <h3 className="heading">{Price}</h3>
          <h3 className="heading">Qty:{Qty}</h3>
          <FontAwesomeIcon
            icon={faPlusCircle}
            size="2x"
            className="icon-s"
            onClick={this.IncreaseQty}
          />
          <FontAwesomeIcon
            icon={faMinusCircle}
            size="2x"
            className="icon-s"
            onClick={this.DecreaseQty}
          />
          <FontAwesomeIcon icon={faTrashAlt} size="2x" className="icon-s" />
        </div>
      </div>
    );
  }
}
export default CartItem;
