
// import './App.css'
import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './components/Header/Hearder'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Blogs from './components/Blogs/index.js'
import Footer from './components/Footer/Footer'
import Home from './components/Home/index'
function App () {
  return (
    <div className='App'>
      <BrowserRouter>
      <Header />
      <Switch>
      <Route exact path="/" exact component={Home} />
      <Route exact path="/blog" exact component={Blogs} />
      <Route exact path="/contact" exact component={Contact} />
      <Route exact path="/about" exact component={About} />
      {/* <Blogs/>
      <About />
      <Contact/> */}
      </Switch>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
