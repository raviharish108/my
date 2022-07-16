import { useNavigate } from "react-router-dom";
import { useState } from "react";
export function Moviesphotos({ moviesdata }) {
  return (
    <div>
      <div className="movie-specs">
        {moviesdata.map((mv, index) => <Movie movie={mv} key={index} id={index} />)}
      </div>
    </div>
  );
}
function Movie({ movie, id }) {
  let [like, setLike] = useState(0);
  let [disLike, setdisLike] = useState(0);
  let [show, setshow] = useState(true);
  const summstyle = {
    display: show ? "block" : "none"
  };
  const styles = {
    margin: "5px",
    color: " light-blue"
  };
  const ratstyles = { color: movie.rating > 8 ? "green" : "red" };
  const navigate = useNavigate();
  return (
    <div>


      <div className="movie-container">
        <img className="movie-poster" src={movie.poster} alt={movie.name} />
        <h1 className="movie-name ">{movie.name}</h1>
        <button onClick={() => setshow(!show)}>toggle summary</button>
        <p className="movie-summary" style={summstyle}>{movie.summary}</p>
        <h2 className="movie-rating" style={ratstyles}>{movie.rating}</h2>
        <button onClick={() => setLike(like + 1)} style={styles}><i class="fa fa-thumbs-up" aria-hidden="true">likes{like}</i></button>
        <button onClick={() => navigate(`/movies/${id}`)}>info</button>
        <button onClick={() => setdisLike(disLike + 1)} style={styles}><i class="fa fa-thumbs-down" aria-hidden="true">dislikes{disLike}</i></button>
      </div>
    </div>

  );
}
