import React from 'react'
import Header from './Header'
import Footer from './Footer'
import News from './News'
import Home from './Home'
import Service from './Service'
import About from './About'
import Cases from './Cases'


import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch,
    Redirect,
    hashHistory,
    withRouter
} from 'react-router-dom'

class PCIndex extends React.Component{
    constructor(){
        super()
        this.state={
            paramsList:null
        }
    }
    render(){
        return (
            <Router history={hashHistory}>
            <div>
               <Header/>
                        <Route exact path="/"  render={()=>(<Redirect to="/home"/>)} />
                        <Route  path="/home" component={Home}/>
                        <Route  path="/news" component={News}/>
                        <Route  path="/service" component={Service}/>
                        <Route  path="/about" component={About}/> 
                        <Route  path="/cases" component={Cases}/>
                                   
                <Footer/>
            </div>
            </Router>
            
        )
        
    }
    
}

export default PCIndex