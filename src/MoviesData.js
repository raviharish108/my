
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function MoviesData({addmovies,moviesdata})
{
   
   let[name,setname]=useState("");
   let[poster,setposter]=useState("");
   let[rating,setrating]=useState("");
   let[summary,setsummary]=useState("");
 const styles={
    hight:"30px",
    width:"90%",
    margin:"20px"
 }
  return(
 <div>
    <TextField  style={styles} id="outlined-basic" label="Enter Movie Name" variant="outlined" onChange={(event)=>setname(event.target.value)} />
  
    <TextField  style={styles} id="outlined-basic" label="Enter poster link" variant="outlined" onChange={(event)=>setposter(event.target.value)} />
 
    <TextField   style={styles} id="outlined-basic" label="Enter Movie Rating" variant="outlined" onChange={(event)=>setrating(event.target.value)} />

    <TextField  style={styles} id="outlined-basic" label="Enter Movie summary" variant="outlined"  onChange={(event)=>setsummary(event.target.value)}/>

  <Button onClick={()=>addmovies([...moviesdata,{name:name,poster:poster,rating:rating,summary:summary}])} variant="contained">add movies</Button>
 </div>
 )
}


 
 