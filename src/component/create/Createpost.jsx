import React, { useState, useEffect } from 'react'
import DataSaverOnTwoToneIcon from '@mui/icons-material/DataSaverOnTwoTone';
import photu from './photu.jpg'
import { useLocation, useNavigate } from 'react-router';
import axios from "axios";

import { DataContext } from "../../context/DataProvider"
import { useContext } from 'react';
import { getToken } from '../jwttoken.js/jwtToken'


const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: '',
    createdDate: new Date()
}

// readformData(); imp

const Createpost = () => {
    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState("");
    const navigate = useNavigate();



    const { account } = useContext(DataContext);
    const location = useLocation();



    useEffect(() => {
        function getImage() {
            if (file) {
                let dataform = new FormData();
                dataform.append("name", file.name);
                dataform.append("file", file);


                const loginUrl = 'http://localhost:8800/file/upload'
                async function postPicture(data) {
                    await axios.post(loginUrl, data)
                        .then(function (response) {
                            console.log(response.data, "axios responce");
                            let dell = responce.data;
                            post.picture = dell;
                            return true;
                            // return response.data;
                        })
                        .catch(function (error) {
                            console.log(error);

                        });
                }


                const responce = postPicture(dataform);
            }
        }
        getImage();

        // jb api call krege our jo responce aayega iske equal kr dege 

        // use if else statement after search
        post.categories = location.search?.split("=")[1] || "All";
        post.username = account.username;

    }, [file])

    function handleOnChange(e) {
        setPost({ ...post, [e.target.name]: e.target.value })

    }
    const photo = post.picture ? post.picture : photu;


    const baseUrl = 'http://localhost:8800/create'

    async function handleOnClick(e) {
        const tokenValue = getToken()
        e.preventDefault()
        // await axios.post(baseUrl, post, { headers: { "Authorization": tokenValue }
        await axios.post(baseUrl, post, {
            headers: { "Authorization": tokenValue }
        })
            .then(function (response) {
                console.log(response.data);
                navigate('/');
            })
            .catch(function (error) {
                console.log(error, "error come from here");

            });

    }


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center mt-4 mb-2">
                        <img src={photo} className="img-fluid" alt="Responsive"></img>
                    </div>
                    <div className=" d-flex justify-content-between" >
                        <label htmlFor="formFile" className="form-label">
                            <DataSaverOnTwoToneIcon />
                            <input className="form-control d-none" type="file" id="formFile" onChange={(e) => setFile(e.target.files[0])} />
                        </label>
                        <input type="text" className="form-control" onChange={(e) => handleOnChange(e)} aria-label="Sizing example input" name="title" />

                        <button type="button" onClick={(e) => handleOnClick(e)} className="btn btn-success">Success</button>
                    </div>
                    <div className="col-md-12 my-5">
                        <input placeholder='Tell yout stary' style={{ height: "100px" }} onChange={(e) => handleOnChange(e)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing" name='description' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Createpost; 