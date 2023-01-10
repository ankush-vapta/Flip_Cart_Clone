import React from 'react'
import { useParams, Link, } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react';

import { DataContext } from '../../context/DataProvider'
import axios from 'axios';


const DetailsView = () => {

    const [post, setPost] = useState({});
    const { id } = useParams();
    const { account } = useContext(DataContext);

    useEffect(() => {
        const fetchDataUrl = `http://localhost:8800/post`
        function fetchData(id) {
            axios.get(`${fetchDataUrl}/${id}`).then((responce) => {
                setPost(responce.data);
            }).catch((error) => {
                console.log(error);
            })
        }
        fetchData(id)
    }, []);


    return (
        <>
            <div className="cintainer">

                <div className="container bg-success my-3 d-flex flex-column align-items-center" style={{ height: "500px", width: "100%" }} >
                    <div className='container ' style={{ margin: "40px" }}>
                        {account.username === post.username &&
                            <>
                                <Link to={`/update/${post._id}`}>
                                    <button type="button " className="btn btn-primary mx-3">Eidt icon</button>
                                </Link>

                                <button type="button" className="btn btn-secondary mx-3">Delete ICon</button>
                            </>
                        }
                    </div>

                    <div className="col-md-12 bg light  ">
                        <div className="card " >
                            <div className="card-body">
                                <div className="toast-header">

                                    <strong className="me-auto">{post._id}</strong>
                                    <small>{Date().slice(0, 16)}</small>

                                </div>
                                <div className="toast-body">
                                    {post.username}
                                </div>
                                <hr />

                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">description : {(post.description) || (post.description)}.....</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/*  */}

        </>
    )
}

export default DetailsView