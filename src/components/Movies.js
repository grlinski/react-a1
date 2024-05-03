


function Movies(props){
  return (

    <div className="movies">
      {props.list.map(movie=>{

          <p>{movie.title}</p>

      })}

    </div>
  );
}

export default Movies;
