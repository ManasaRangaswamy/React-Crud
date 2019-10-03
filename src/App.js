import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import logo from './logo.svg';
import './App.css'
import Login from './components/login'
import Register from './components/register'

class App extends Component{
  render(){
    return (
      <Router>
        <div className="App">
          <Switch>
            {/* <Login />
            <Register /> */}
            <Route path="/"  exact component={Register} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}
  


export default App;
