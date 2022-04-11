// ekorbi
import './App.css';
import './infoComponents/info.css'
import React from 'react';
import Header from './components/Header';
import Features from './components/Features';
import Services from './components/Services';
import Subscribe from './components/Subscribe';
import Gvideo from './components/Gvideo';
import Form from './components/Form'
import Info from './infoComponents/Info'
import img2 from './Images/ceo2.jpg'
import { Link } from "react-router-dom"
import Admin from './components/admin/Admin'
import './components/admin/admin.css'
import Genesis from './components/Genesis';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
   const close = <Link to="/read-more" className='close1'>X</Link>
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/features">
            <Features />
          </Route>
          <Route path="/home">
              <Header />
          </Route>
          <Route path="/services">
             <Services />
          </Route>
          <Route path="/genesis/video">
             <Gvideo/>
          </Route>
          <Route path="/subscribe">
              <Subscribe />
          </Route>
          <Route path='/login'>
            <Form/>
          </Route>
          <Route exact path='/admin' component={Admin}>
          </Route>
          <Route path='/read-more'>
            <Genesis/>
          </Route>
          <Route path='/genesis-ceo'>
            <Info img={img2} name='Jaehoon Chang' position="CEO of Genesis" company="genesis.website" close = {close}/>
          </Route>
          <Route path="/">
            <Header/>
            <Features />
            <Services />
            <Gvideo />
            <Subscribe/>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
