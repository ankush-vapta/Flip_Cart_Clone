import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../ToolkitStore/ToolkitSlice';


const ToolkitCart = () => {
  const Products = useSelector((state) => state.cart);
  const dispatch = useDispatch();


  const handleonClick = (productid) => {
    dispatch(remove(productid));
  }

  return (
    <div>
      <div className='container-fluid'>
        <div className="container">
          <div className="row">
            {Products.map((item) =>
              <div className="col-md-3  my-3" key={item.id}>
                <div className="card" >
                  <img className="card-img-top" src={item.image} alt="Card image cap" style={{ "height": "400px" }} />
                  <div className="card-body">
                    <h5 className="card-title">{item.category}</h5>
                    <p className="card-text">{item.description.slice(0, 100)}........</p>
                    <button onClick={() => handleonClick(item.id)} className="btn btn-info">{item.price}</button>
                  </div>
                </div>
              </div>

            )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToolkitCart