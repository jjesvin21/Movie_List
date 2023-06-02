import React, { useContext } from 'react'
import { Moviectx } from './MovieContext';
import { useNavigate } from 'react-router-dom';

export default function MovieCard(props) {
    const navigate = useNavigate()
    const ctx = useContext(Moviectx)
    const getMovie  = async (e)=>{
        e.preventDefault()
        console.log("hello");
        await ctx.setcurrentMovie(props.movie)
        console.log(ctx.currentMovie);
        navigate("/movie")
    }
    return (
    
    <div className=' w-48 h-100 bg-[#657f8e] m-3 flex justify-center items-center flex-col  rounded-md hover:scale-105 pb-1' onClick={getMovie}>
        <img src={props.movie.show.image.medium} alt='cant load img' className=' rounded-t-md '></img>
        <p>{props.movie.show.name}</p>
        <div className=' flex justify-between flex-row text-xs w-full pl-2 pr-2'><p>{props.movie.show.language}  </p>
        <p>duration : {props.movie.show.runtime}min</p>
        </div>
        </div>
  )
}
