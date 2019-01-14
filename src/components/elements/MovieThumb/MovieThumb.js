import React from 'react';
import ReactDom from 'react-dom';
import './MovieThumb.css';
import {Link} from 'react-router-dom';



const MovieThumb  = (props)=>{
return (
<div className="rmdb-moviethumb">
{ props.clickable ?
<Link to={{pathname:`/${props.movieId}`,movieName:`${props.movieName}`}} >
<img src={props.image} alt="thumb image" />
</Link>
:

<img src={props.image} alt="thumb image" />
}


</div>





)

}
export default MovieThumb;