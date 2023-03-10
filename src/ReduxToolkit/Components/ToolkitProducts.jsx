import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {add} from '../ToolkitStore/ToolkitSlice'

const ToolkitProducts = () => {
    const [Products, setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchApi = async () => axios.get(`https://fakestoreapi.com/products`)
            .then(response => response.data)
            .then((data) => {
                setProducts(data)
            })
        fetchApi();
    }, [])
    console.log(Products , "api")

    const handleonClick = (item) => {
         dispatch(add(item))
         
    }

    return (
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
                                    <button onClick={() => handleonClick(item)} className="btn btn-primary">{item.price}</button>
                                </div>
                            </div>
                        </div>

                    )
                    }
                </div>
            </div>
        </div>

    )
}

export default ToolkitProducts;