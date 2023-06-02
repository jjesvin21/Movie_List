import React, { useContext, useEffect } from 'react'
import { Moviectx } from './MovieContext';
import { useNavigate } from 'react-router-dom';

export default function Movie() {
    const ctx = useContext(Moviectx)
    const movie = ctx.currentMovie
    const navigate = useNavigate()
    

        if(movie==null || movie.show == null){
            return(<div className=' flex flex-col min-h-screen bg-[#1D2B38] text-slate-50 items-center justify-center'>not found
            <buttion onClick={()=>{navigate("/")}} className=' rounded-sm bg-[#657f8e]'>Go to Home</buttion></div>)
        }
      return (
    <div className=' w-full bg-[#1D2B38] h-auto min-h-screen'>
        <div className=' h-30    p-6  flex items-center'>
            <p className=' text-xl text-white'>{movie.show.name}</p>
        </div>
    <div className='w-full h-auto p-6'>
       <div className=' flex flex-col md:flex-row'>
        <img src={movie.show.image.original} className=' w-full h-auto md:h-96 md:w-auto'></img>
        <div className=' p-16 flex flex-col text-white '>
            <div className=' text-sm '>
            <p>rating : {movie.show.rating.average}</p>
            <p>premiered on : {movie.show.premiered}</p>
            </div>
                  
      <div dangerouslySetInnerHTML={{ __html: movie.show.summary }}></div>
            <div className=' text-sm mb-1'>
            <p>
                premieres on: {movie.show.schedule.days.map((item)=>{
                    return(item)
                })}
            </p>
            
            <p>time :{movie.show.schedule.time} {movie.show.network.country.timezone} </p>
            </div>
            <a href={movie.show.network.officialSite}>
            <button onClick={()=>{
                console.log(movie.show.network.officialSite);
            }} className=' bg-[#657f8e] rounded-sm p-1'>Wach Now</button>
            </a>
        </div>
       </div>
    </div>

    </div>
    
  )
}
