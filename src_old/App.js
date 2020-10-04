import React from 'react';

import Home from './components/Home';
import Project1 from './components/Project1';

import Project2 from './components/Project2';
import Project3 from './components/Project3';

import BookList from './components/practice/booklist/BookList';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className='app'>
        <ul className='app__ul'>
          <div className='app__ul-liContainer'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/project1'>Project-1</Link>
            </li>
            <li>
              <Link to='/project2'>Project-2</Link>
            </li>
            <li>
              <Link to='/project3'>Project-3</Link>
            </li>
          </div>
          <div className='app__ul-liContainer'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/project1'>Project-1</Link>
            </li>
            <li>
              <Link to='/project2'>Project-2</Link>
            </li>
            <li>
              <Link to='/project3'>Project-3</Link>
            </li>
          </div>
          <div className='app__ul-liContainer'>
            <li>
              <Link to='/booklist'>BookList</Link>
            </li>
          </div>
        </ul>

        <hr />
        <div className='app__container'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/project1'>
              <Project1 />
            </Route>
            <Route path='/project2'>
              <Project2 />
            </Route>
            <Route path='/project3'>
              <Project3 />
            </Route>
            <Route path='/booklist'>
              <BookList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
