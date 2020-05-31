import React from 'react';
import Head from './Components/Head';
import './Style/main.scss';
import Nav from './Components/Nav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './Components/Main';
import GlassesDetails from './Components/GlassesDetails';
import CollectionCatagories from './Components/CollectionCatagories';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Head/>
        <Nav/>
        <Switch>
          <Route path='/' exact component={Main}/>
          <Route path='/Details/:id' component={GlassesDetails}/>
          <Route path='/collectionsDetails/Mens' component={()=><CollectionCatagories type='Men'/>}/>
          <Route path='/collectionsDetails/Womens' component={()=><CollectionCatagories type='Women'/>}/>
          <Route path='/collectionsDetails/prism' component={()=><CollectionCatagories type='Prism'/>}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
