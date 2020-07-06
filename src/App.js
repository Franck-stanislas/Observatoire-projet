import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './assets/components/Header.js'
import Footer from './assets/components/Footer'
import HomeScreen from './assets/Screens/HomeScreen';
import About from './assets/Screens/About';
import NewsContent from './assets/Screens/NewsContent';
import Work from './assets/Screens/Work'

class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route path="/details/:id" component={NewsContent}/>
          <Route path="/" exact={true} component={HomeScreen} />
          <Route path="/about" component={About}/>
          <Route path="/work" component={Work}/>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App
