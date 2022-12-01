

import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import Cards from './Cards'

import { useSearchParams } from 'react-router-dom';




const CardComponent = () => {

  const [post, setPost] = useState([]);

  const [searchParam] = useSearchParams();
  
  const category = searchParam.get("category");
  // console.log(category, "get_category_details")

  // const cate = "black"


  useEffect(() => {
    // const fetchDataUrl = " http://localhost:8800/post?categories=Movice"
    const fetchDataUrl = `http://localhost:8800/post`
    function fetchData(cate) {
      // console.log(Object.values(cate)[0], "catecatecatecatecatecate")
      axios.get(`${fetchDataUrl}?categories=${Object.values(cate)[0]}`).then((responce) => {
        // console.log(responce.data, "responceresponceresponceresponceresponce")
        setPost(responce.data);
      }).catch((error) => {
        console.log(error);
      })
    }
    fetchData({ cate: category || "" })
  }, [category])

  // console.log(post, "postpostpostpostpost");



  return (
    <>
      {
        post.length > 0 ? post.map((item) =>
          <Cards item={item} key={item.id} />
        )
          : "no preview items"
      }

    </>
  )
}

export default CardComponent