import React from 'react';
import ReactDom from 'react-dom';
import Header from '../elements/Header/Header';
import Home from '../Home/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Movie from '../Movie/Movie';
import NotFound from '../elements/NotFound/NotFound';




const App  = ()=>{
return (
<BrowserRouter>
<React.Fragment>
<Header />
<Switch>
<Route exact path="/" component={Home} />
<Route exact path="/:movieId" component={Movie} />
<Route component={NotFound} />
</Switch>
</React.Fragment>

</BrowserRouter>





)

}
export default App;