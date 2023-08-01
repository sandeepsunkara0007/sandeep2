import {useState,useEffect} from 'react';
//ee85b650
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'
const url='http://omdbapi.com?apikey=ee85b650';
const movie1=
  {
    "Title": "The Amazing Spiderman 2 Webb Cut",
    "Year": "2021",
    "imdbID": "tt18351128",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg"
  }



const App=()=>{
  const [Movies,setMovies]=useState()
  const [searchTerm,setSearchTerm] =useState('')
    const searchmovies=async(title)=>{
        const response= await fetch(`${url}&s=${title}`)
        const data= await response.json();
        setMovies(data.Search);
    
    }
    useEffect(()=>{
      searchmovies('spiderman');
    
    },[])
    return(
      <div className='app'>
    <h1>SandeepBomma</h1>
   
    <div className='search'>
    <input
    placeholder='search for movie'
    value={searchTerm} 
    onChange={(e)=>setSearchTerm(e.target.value) }
    />
    <img
    src={SearchIcon}
    alt='search'
    onClick={()=>searchmovies(searchTerm)}
    />
    </div>
    {
  Movies?.length>0
  ?(
    <div className="container">
     
        {Movies.map((movie)=>(
          <MovieCard movie={movie}/>

        )) }
      
        
    </div>
  ):(
    <div className='empty'>
      <h2>no movies found</h2>
    </div>
  )
}

    
    </div>
    );
}
export default App;