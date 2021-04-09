import React from "react";
import CartItem from "./CartItem";
class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          MobileName: "Xiomi",
          Price: "Rs 9999",
          Qty: 1,
          Image: "https://static.toiimg.com/photo/73078527.cms",
          id: 1
        },
        {
          MobileName: "Samsung",
          Price: "Rs 12999",
          Qty: 1,
          Image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmvNu6Htvkzifi_zVUCSNvMPD7JtrFTqf0Vw&usqp=CAU",
          id: 2
        },
        {
          MobileName: "Apple",
          Price: "Rs 89999",
          Qty: 1,
          Image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6BG1yeieenCc_JbyhDeyKPhQ-mgm4mE9crA&usqp=CAU",
          id: 3
        }
      ]
    };
  }
  render() {
    const { products } = this.state;
    return (
      <div>
        {products.map((item) => {
          return <CartItem product={item} key={products.id} />;
        })}
      </div>
    );
  }
}
export default Cart;
