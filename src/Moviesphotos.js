import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Favorite from '@mui/icons-material/Favorite';


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

<Card variant="outlined" sx={{ minWidth: 320 }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?crop=entropy&auto=format&fit=crop&w=3270"
            alt=""
          />
        </AspectRatio>
        <IconButton
          aria-label="Like minimal photography"
          size="md"
          variant="solid"
          color="danger"
          sx={{
            position: 'absolute',
            zIndex: 2,
            borderRadius: '50%',
            right: '1rem',
            bottom: 0,
            transform: 'translateY(50%)',
          }}
        >
          <Favorite />
        </IconButton>
      </CardOverflow>
      <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>
        <Link href="#multiple-actions" overlay underline="none">
          Yosemite National Park
        </Link>
      </Typography>
      <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
        <Link href="#multiple-actions">California</Link>
      </Typography>
      <CardOverflow
        variant="soft"
        sx={{
          display: 'flex',
          gap: 1.5,
          py: 1.5,
          px: 'var(--Card-padding)',
          borderTop: '1px solid',
          borderColor: 'neutral.outlinedBorder',
          bgcolor: 'background.level1',
        }}
      >
        <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
          6.3k views
        </Typography>
        <Box sx={{ width: 2, bgcolor: 'divider' }} />
        <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
          1 hour ago
        </Typography>
      </CardOverflow>
    </Card>
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
