import React, { Component } from "react";
import { Link } from "react-router-dom";
import products from "../../reducers/products";

class ProductItem extends Component {
  onDelete = (id) => {
    if (window.confirm("Bạn chắc chắn muốn xóa?")) {
      //eslint-disable-line
      this.props.onDelete(id);
      console.log(id);
    }
  };

  render() {
    var { product, index } = this.props;
    var statusName = product.status ? "Còn hàng" : "Hết hàng";
    var statusClass = product.status ? "default" : "warning";

    return (
      <tr>
        <td>{index}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <span class={`label label-${statusClass}`}>{statusName}</span>
        </td>
        <td>
          <Link
            to={`/product/${product.id}/edit`}
            class="btn btn-success mr-10"
          >
            Sửa
          </Link>
          <button
            type="button"
            class="btn btn-lg btn-danger"
            onClick={() => this.onDelete(product.id)}
          >
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
