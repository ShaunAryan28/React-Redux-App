import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import productSlice from '../store/productSlice';
import { addItem, resetCart } from '../store/cartSlice';
const Products = () => {
   const dispatch = useDispatch()
    const {totalQuantity} = useSelector(state => state.cart)
   const {productList} = useSelector(state => state.product)
  return (
    <>
      <div className="container text-white">
        <h2 className="my-5">Products</h2>
        <div>
          <p>
            Cart Items: {totalQuantity}
          </p>
          <p>
            <button className="btn btn-danger" onClick={()=> dispatch(resetCart())}>Clear Cart</button>
          </p>
        </div>
        <div className="row mt-3 ">
          {productList.map(product => (
          <div className="col-md-4 col-1g-3 mb-3 " key={product.id} >
            <div className="card  ">
              <div className="card-body">
                <h5 className="card-title"  >{product.name}</h5>
                <p className="card-text" >{product.price}</p>
                <button className="btn btn-primary "onClick={()=> dispatch(addItem(product))}>Add To Cart</button>
              </div>
            </div>
          </div>
          ))}
          
      </div>
    </div>
    </>
  );
};

export default Products;
