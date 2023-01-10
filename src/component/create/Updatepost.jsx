import React, { useState, useEffect } from 'react'
import DataSaverOnTwoToneIcon from '@mui/icons-material/DataSaverOnTwoTone';
import photu from './photu.jpg'
import { useLocation, useNavigate, useParams } from 'react-router';
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
const Updatepost = () => {
    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState("");
    const { account } = useContext(DataContext);
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams();
    // this id go to navigate 

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
    }, [])

    function handleOnChange(e) {
        setPost({ ...post, [e.target.name]: e.target.value })
    }

    const photo = post.picture ? post.picture : photu;
    const baseUrl = 'http://localhost:8800/update'
    async function handleOnClick(e) {
        const tokenValue = getToken()
        e.preventDefault()
        // await axios.post(baseUrl, post, { headers: { "Authorization": tokenValue }
        await axios.post(baseUrl, post, {
            headers: { "Authorization": tokenValue }
        })
            .then(function (response) {
                console.log(response.data, "responce from update post")
                navigate(`/details/${id}`);

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
                        <input type="text" value={post.title} className="form-control" onChange={(e) => handleOnChange(e)} aria-label="Sizing example input" name="title" />
                        <button type="button" onClick={(e) => handleOnClick(e)} className="btn btn-success">Update</button>
                    </div>
                    <div className="col-md-12 my-5">
                        <input placeholder='Tell yout stary' value={post.description} style={{ height: "100px" }} onChange={(e) => handleOnChange(e)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing" name='description' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Updatepost; 