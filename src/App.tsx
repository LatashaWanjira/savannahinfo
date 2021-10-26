import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import UsersTable from "./components/UsersTable";
import EditUser from "./components/EditUser";
import UserPosts from "./components/UserPosts";
import Header from  "./components/Header"


function App() {
  return (
    <Router>
      <Header/>
      <div className="container">
        <Route path="/" exact component={UserPosts}/>
        <Route path="/users" component={UsersTable}/>
      </div>
    </Router>
  );
}

export default App;
