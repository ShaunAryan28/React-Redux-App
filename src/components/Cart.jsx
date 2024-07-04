

import { useDispatch, useSelector } from 'react-redux';
import { deleteItem , cartaddItem, resetItem} from "../store/cartSlice";
const cart = () => {
  const { cartList, totalPrice, totalQuantity } = useSelector(state => state.cart)
  const dispatch = useDispatch();
 const handleDeleteItem = (index) => {
    dispatch(deleteItem(index));
  };
  const handleAddItem = (index) => {
    dispatch(cartaddItem(index));
  };
  const handleResetItem = (index) => {
    dispatch(resetItem(index));
  };
  return (
    <div className="container text-white  opacity-10">
      <h3 className="my-5">Cart Item </h3>
      
       
      
      <div className="row mt-3 text-white  opacity-10">
        <table className="table text-white table-striped table-bordered table-sm opacity-10 w-75 text-center">
          <thead className="  text-white  "> 
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {cartList.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.qt}</td>
                <td  >
                  <button className="btn btn-sm btn-danger " onClick={()=> handleDeleteItem(index)}>Remove</button>
                  <button className="btn btn-sm btn-success m-2" onClick={()=> handleAddItem(index)}>Add</button>
                  <button className="btn btn-sm btn-primary" onClick={()=> handleResetItem(index)}>Delete</button>
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
