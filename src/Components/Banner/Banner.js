import React, { useEffect,useState } from 'react'
import {API_KEY,ImageUrl} from '../../constants/constans'
import './Banner.css'
import axios from '../../axios'
function Banner() {
  const [movie, setMovie] = useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[5]);
      setMovie(response.data.results[5])
    })
  },[])
  return (
    <div 
    style={{backgroundImage:`url(${movie ? ImageUrl+movie.backdrop_path :""})`}}
   className='banner'>
        <div className='content'> 
            <h1 className='title'>{movie ? movie.title : ""} </h1>
            <div className='banner_buttons'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>

        </div>
        <h1 className='discription'>{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner