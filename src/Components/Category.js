import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

function Category() {
  
  let {id}= useParams()
  let [post,setPost]=useState([])
  useEffect(()=>{
      fetch(`https://newsapi.org/v2/top-headlines?Category=${id}&apiKey=e10ef13077b74a44b9b65aedfa77740e`)
      .then((res)=>res.json())
      .then((data)=>setPost(data.articles));
  },[]);

  return (
    <>
    <div className='catecorypage'>
    <div className='container'>
    <h2 className='text-uppercase'>{id}</h2>
    <div className='row'>
    {post.map((a)=>{return(
  <div className='col-lg-3'>
  <div className='card py-2'>
        <img src={a.urlToImage}/>
        <p className='py-2'>{a.title}</p>
        <p className='py-2'>{a.author}</p>
        </div>
        </div>

)})}

</div>
</div>
</div>
    </>
  )
}

export default Category