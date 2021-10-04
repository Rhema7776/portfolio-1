import React from 'react'
import Home from './Home'
import Contact from './Contact'
import Resume from './Resume'
import Navbar from './Navbar'
import About from './About'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css'

const App = () => {

  const checkScroll = ()=> {
    
    console.log('hello world');
}
 

    return (
      

        <Router>
            <div className="nav"> 
              <Navbar />
            </div>
              {/* <Switch> */}

                {/* <Router exact path="/">
                  <Home />
                </Router> */}
                <Router exact path="/about">
                  <About />
                </Router>
                <Router exact path="/resume">
                 <Resume />
                </Router>
                <Router exact path="/contact">
                 <Contact/>
                </Router>
               
              {/* </Switch> */}
           
            
           
        </Router>
        
    )
}
// npm install react-router-dom@5
export default App