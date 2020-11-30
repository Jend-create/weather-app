import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Weather from './components/home'
import Navbar from './components/navbar'
import login from './components/login'
import signup from './components/signup';


function App() {
  return (

    <Router>
     <Navbar/> 
     <Switch>
       <Route exact path='/' component={Weather}/>      
       <Route path='/signup' component={signup}/>
       <Route path='/login' component={login}/>
       </Switch>     
    </Router>
    
  );
}

export default App;
