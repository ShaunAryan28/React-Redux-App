import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../store/cartSlice";
const cart = () => {
  const { cartList, totalPrice, totalQuantity } = useSelector(state => state.cart)
  const dispatch = useDispatch()

  return (
    <div className="container">
      <h3 className="my-5">Cart Item Lists</h3>
      <p>
        <Link to="/">Back</Link>
      </p>
      <div className="row mt-3">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Qt</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {cartList.map((item, key) => (
              <tr key={key}>
                <th scope="row">{key + 1}</th>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.qt}</td>
                <td>
                  <button className="btn btn-sm btn-danger" onClick={()=> dispatch(deleteItem(item))}>Delete</button>
                </td>
              </tr>
            ))}
            {
              cartList.length>0 ? (  
                <tr>
                  <th scope="row"></th>
                  <td></td>
                  <td>{totalPrice}</td>
                  <td>{totalQuantity}</td>
                  
                  <td>
                    <button className="btn btn-sm btn-success" >Buy</button>
                  </td>
                </tr>
              ): null
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default cart;
