import React from 'react';
import ReactDom from 'react-dom';
import './LoadMoreBtn.css';




const LoadMoreBtn  = (props)=>{
return (
<div className="rmdb-loadmorebtn" onClick={props.onClick}>
<p>{props.text}</p>
</div>





)

}
export default LoadMoreBtn;