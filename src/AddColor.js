import { useState } from "react";

export function AddColor() {
  let [colors, setColors] = useState("");
  let vannams=["green","violet","red"];
  let[Col, setCol]=useState(vannams);
  const styles = {
    background: colors,
    margin:"10px"
  };
  return (
   <div>
      <input type="text"
        style={styles}
        placeholder="enter the color"
        onChange={(event) => setColors(event.target.value)}
      ></input>
     <button onClick={()=>setCol([...Col,colors])}>Add Color</button>
     
     {Col.map((vm)=>
     <ColBox color={vm}/>)}
   </div>
  );
}
 function ColBox(props){
   const styles={
    background:props.color,
    hight:"300px",
    width:"75%",
    margin:"20px"
   }
  return(
     <div style={styles}>hello</div>
  )
 }
//  function Addcolor(){
//   let[color,setColor]=useState("orange");
//   let OldColors=["brown","gray","red"];
//   let [ColorList,setColorsss]=useState(OldColors);
//   let styles={
//     background:color,
//     hight:"150px",
//     width:"500px",
//     margin:"10px"
//   }
//   return(
//     <div>
//       <input  type="text"
//               placeholder='enter the color'
//               onChange={(event)=>setColor(event.target.value)}
//               style={styles}
//               value={color}
//               ></input>
//               <button 
//                  onClick={()=>setColorsss([...ColorList,color])}>addcolor</button>
//               {ColorList.map((clr)=>(
//                 <ColorBox color={clr}/> ))}
              
//     </div>
//   )
//  }
// function ColorBox({color}){
//   let Styless={ 
//     color:"black",
//     background:color,
//     hight:"300px",
//     width:"500px",
//     margin:"10px"
//   }
//   return(
//     <div>
//       <div style={Styless}>this is my color</div>
//     </div>

//   )
// }
