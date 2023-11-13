import { useContext, useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {AuthContext} from './components/Usercontext';
import Profile from './components/Profile';


function App() {
  const currentUser = useContext(AuthContext);
  const e ={};
  console.log(currentUser);
  console.log(currentUser);
  
  const ProtectedRoute = ({ children }) => {
    if (currentUser.currentUser == null) {
      console.log('navigation to login page');
      return (<Navigate to="/login"></Navigate>)
    }
    return children
  }
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route exact path="/signup" element={<Signup></Signup>} />
            <Route exact path="/login" element={<Login></Login>} />
            <Route path='/' element={<ProtectedRoute> <Dashboard></Dashboard> </ProtectedRoute>} />
            <Route path='/profile' element={<ProtectedRoute> <Profile></Profile> </ProtectedRoute>} />
          </Routes>
        </Router >
    </div>
  );
}

export default App;
