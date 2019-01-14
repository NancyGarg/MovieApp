import React from 'react';
import ReactDom from 'react-dom';
import './MovieInfoBar.css';
import {calcTime,convertMoney} from '../../../helpers.js';
import FontAwesome from 'react-fontawesome';





const MovieInfoBar = (props)=>{

return (
<div className="rmdb-movieinfobar">
<div className="rmdb-movieinfobar-content">
<div className="rmdb-movieinfobar-content-col">
<FontAwesome className="fa-time" size="3x" name="time" />
<span className="rmdb-movieinfobar-info" >Running Time: {calcTime(props.time)} </span>
</div>
<div className="rmdb-movieinfobar-content-col">
<FontAwesome className="fa-budget" size="3x" name="budget" />
<span className="rmdb-movieinfobar-info" >Budget: {convertMoney(props.budget)} </span>
</div>
<div className="rmdb-movieinfobar-content-col">
<FontAwesome className="fa-revenue" name="revenue" size="3x" />
<span className="rmdb-movieinfobar-info" >Revenue: {convertMoney(props.revenue)} </span>
</div>
</div>

</div>





)
}


export default MovieInfoBar;