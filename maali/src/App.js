import './App.css';
import { Route, Redirect } from 'react-router-dom'
import axios from 'axios'
import { useState , useEffect, useContext } from 'react'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Overview from './pages/Overview'


function App() {

  const [ user, setUser ] = useState({})
  return (
    <div className="App">
      <Navbar />

      <Route
        exact path ="/"
        render={() =>
           <Home />
        }
      />

      <Route
        path="/signup"
        render={()=>
          <Signup setUser={setUser}/>
        }
      />
      
      <Route
        path="/login"
        render={()=>
          <Login setUser={setUser} />
        }
      />



    </div>
  );
}

export default App;
