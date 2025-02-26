/** @format */

import React, { useEffect, useRef, useState } from 'react';
import './home.css';
import axios from 'axios';
import img from './img.png'

function Home() {
  const [url, setUrls] = useState('');
  const [result, setresult] = useState('');
  const name="website";
  const ref=useRef(null);
  function handleSubmit(e){
    e.preventDefault()
    console.log('clicked')
    setUrls(ref.current.value || '');
    fetchApi()
  }

  let DefaultUrl=process.env.REACT_APP_BACKEND_URL;
async function fetchApi(){
  console.log("set value",url)
    try{const response= await axios.post(`${DefaultUrl}api/url`,{url,name})

    // console.log(response.data.message.nnid)

    
    setresult(DefaultUrl+response.data.message.nnid)
  }
    catch(e){
      console.log(DefaultUrl+e.message)
      alert(e.message)
      console.log(e.message)


    }
}
   

    
  return (
    <div className="Home">
        <h1 className='heading'>URL Shortener</h1>
      <div className="container">
        <form action="">
          <label htmlFor="url">Paste the URL to be shortened
          </label>
          
          <input type="text" id="url" name="url" placeholder="Enter URL" ref={ref} />
          <input 
          value={result}
          type="text"  placeholder='result'  />
          <button className='submit' onClick={handleSubmit}>Shorten</button>
          
        </form>
      </div>
      <img src={img} className='img' alt="" />
    </div>
  );
}

export default Home;
