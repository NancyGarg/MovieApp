import React from 'react';
import ReactDom from 'react-dom';
import './Navigation.css';
import {Link} from 'react-router-dom';





const Navigation = (props)=>{

return (
<div className="rmdb-navigation">
<div className="rmdb-navigation-content">
<Link to='/'>
<p>Home |</p>
</Link>
<p>{props.movie}</p>
</div>

</div>





)
}


export default Navigation;