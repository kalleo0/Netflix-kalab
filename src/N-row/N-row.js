import React, { useState, useEffect } from 'react'
import axios from '../axios';
import "./N-row.css"
import  Youtube from "react-youtube"
import movieTrailer from "movie-trailer"
const base_url = "https://image.tmdb.org/t/p/original/";

    function Row({ title, fetchUrl,largeRow }) {
        const [movies, setMovies] = useState([]);
        const [TrailerUrl, SetTrailerUrl] = useState("")
        const manageClick = (movie) => {
          if(TrailerUrl){
            SetTrailerUrl('')
          }else {
            movieTrailer(movie?.title || movie?.name||"")
            .then((url) => {
              const urlParse = new URLSearchParams(new URL(url).search)
              SetTrailerUrl(urlParse.get('v'))
            })
            .catch((error) => console.log(error))
          }
        }
    
        useEffect(() => {
          async function fetchData() {
            const request = await axios .get(fetchUrl);
           setMovies(request.data.results); //  console.log(request)
            return request;
          }
          fetchData();
        } ,[fetchUrl])
       let opts={
        height: "390",
        width: "100%",
        playerVars: {
          autoplay: 1,
        }
      } 
  return (
    <div className='row'>
  <h2>{title}</h2>
  <div className="row__posters ">
        {movies.map((movie) => (
          
          <img
            key={movie.id}
            onClick={() => manageClick(movie)}
            // className=row__poster
            className={`row__poster ${largeRow && "row__posterLarge"}`}
            // src={`${base_url}${
            //     movie.poster_path
            // }`}
            src={`${base_url}${
                largeRow ? movie.poster_path : movie.backdrop_path
              }`}
            alt={movie.name}
          />
        ))}
      </div>
     <div style={{ padding: "40px"}} >
     {TrailerUrl && < Youtube videoId={TrailerUrl} opts={opts} />}
     </div>
    </div>
  )
}

export default Row