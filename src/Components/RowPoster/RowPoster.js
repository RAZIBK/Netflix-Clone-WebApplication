import React,{useEffect,useState} from 'react'
import "./RowPoster.css"
import axios from '../../axios'
import {ImageUrl,API_KEY } from '../../constants/constans'
import YouTube from 'react-youtube'
function RowPoster(props) {
  const [movies, setmovies] = useState([])
  const [urlId, seturlId] = useState("")
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      // console.log(response);
      setmovies(response.data.results)
    }).catch(err=>{
      // alert('network erroe')
    })

  })
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie=(id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        seturlId(response.data.results[0])
      }else{
        console.log("Not avail");
      }
})
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? "smallPoster" : 'poster'} src={`${ImageUrl+obj.backdrop_path}`} alt="Poster" />
          )}
            
        </div>
        {
          urlId && <YouTube videoId={urlId.key} opts={opts}/>

        }
    </div>
  )
}

export default RowPoster