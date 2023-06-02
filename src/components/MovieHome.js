import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'


export default function MovieHome() {
const get_movie_data = ()=>{
     axios.get("https://api.tvmaze.com/search/shows?q=all")
         .then((responce)=>{
            setmovies(responce.data)
            console.log(movies);
            return null
        })
}

const [movies,setmovies] = useState([])


useEffect(get_movie_data,[])
  return (
    <div className=' flex flex-wrap justify-center pt-30 w-full h-auto bg-[#1D2B38] text-white '>
        {
            movies.map((item)=>{
                return(<MovieCard movie = {item}></MovieCard>)
            })
        }
    </div>
  )
}
