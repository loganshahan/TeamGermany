import React, { Component, Fragment } from 'react';
import './App.css';
import Nav from './components/Nav.js';
import UserContext from './contex/user-context';
import { BrowserRouter, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Home from './components/Home'
import MainTodo from './components/Todos/MainTodo';
import Todos from './components/Todos/Todos';
import MainBudget from './components/Budget/MainBudget';
import MainCalendar from './components/Calendar/MainCalendar';

class App extends Component {

  componentDidMount() {
    this.context.getUser();
  }

  static contextType = UserContext;

  isLoggedIn(){
    if(this.context.login.id === undefined) {
      return (
        <BrowserRouter>
        <Fragment>

        <Nav />
        <Route exact path='/' 
        component={Welcome} 
        />
        
        </Fragment>
        </BrowserRouter>
      )
    } else {
      return (
        <BrowserRouter>
        <Fragment>

        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/home/addTodo" component={MainTodo} />
        <Route exact path="/home/MainBudget" component={MainBudget} />
        <Route exact path="/home/MainCalendar" component={MainCalendar} />
        <Route exact path="/home/MainTodo" component={Todos} />

        </Fragment>
        </BrowserRouter>
      )
    }
  }

  render() {

    return (
      
      <div className="App ">

        {this.isLoggedIn()}

      </div>
    );
  }
}

export default App;
