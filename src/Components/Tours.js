import React, { useEffect, useState } from 'react'

function Tours() {
    let [post,setPost]=useState([])
    useEffect(()=>{
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=e10ef13077b74a44b9b65aedfa77740e`)
        .then((res)=>res.json())
        .then((data)=>setPost(data.articles));
    },[]);

  return (
    <>
    <div className='tourpage'>
  <div className='container'>
    <h2>Where Do you want to travel?</h2>
    <div className='row'>
        
{post.map((a)=>{return(
  <div className='col-lg-3'>
  <div className='card py-2'>
        <img src={a.urlToImage}/>
        <p className='py-2'>{a.description}</p>
        </div>
        </div>




    
)})}

        
    </div>
    </div>
    </div>
    </>
  )
}

export default Tours