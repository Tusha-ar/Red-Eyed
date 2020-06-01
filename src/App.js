import React from 'react';
// import Head from './Components/Head';
import './Style/main.scss';
import Nav from './Components/Nav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './Components/Main';
import GlassesDetails from './Components/GlassesDetails';
import CollectionCatagories from './Components/CollectionCatagories';
import Search from './Components/Search';
import SearchRasult from './Components/SearchResult';


function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Search/>
        <Nav/>
        <Switch>
          <Route path='/' exact component={Main}/>
          <Route path='/Details/:id' component={GlassesDetails}/>
          <Route path='/collectionsDetails/Mens' component={()=><CollectionCatagories type='Men'/>}/>
          <Route path='/collectionsDetails/Womens' component={()=><CollectionCatagories type='Women'/>}/>
          <Route path='/collectionsDetails/prism' component={()=><CollectionCatagories type='Prism'/>}/>
          <Route path='/collectionsDetails/All' component={()=><CollectionCatagories type='All'/>}/>
          <Route path='/collectionsDetails/Classics' component={()=><CollectionCatagories type='Classics'/>}/>
          <Route path='/collectionsDetails/Metal' component={()=><CollectionCatagories type='Metal'/>}/>
          <Route path='/SearchResults' component={SearchRasult}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
