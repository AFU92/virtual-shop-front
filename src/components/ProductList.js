import React from "react";
import { Link } from "react-router-dom";
class ProductsList extends React.Component {
  render() {
    return (
      <div>
        {/* {filteredProducts.map(product => {
          return (
            <li key={product.id}>
              <Link to={`/product/${product.id}`}>
                <ProductsList product={product} />
              </Link>
            </li>
          );
        })} */}
      </div>
    );
  }
}
export default ProductsList;
