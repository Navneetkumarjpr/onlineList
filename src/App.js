import './App.css';
import React,{useContext} from 'react'
import HomePage from './component/HomePage';
import Login from './component/Login';
import NewData from './component/NewData';
import PageNotFound from './component/PageNotFound';
import {Route,Switch} from "react-router-dom"
import Header from './component/Header';
import Update from './component/Update';
import {UserContext} from "./context/UserProvider"
function App() {
  const {userLogged} = useContext(UserContext);
  return (
    <div className="App">    
    {
      userLogged!=null?<Header/>:""
    }  
      <Switch>
         <Route exact path='/'>{userLogged!=null?<HomePage/>:<Login/>}</Route>
         <Route path='/newData'>{userLogged!=null?<NewData/>:<Login/>}</Route>
         <Route path='/update/:id'>{userLogged!=null?<Update/>:<Login/>}</Route>
         <Route path='*'><PageNotFound/></Route>
       </Switch>
    </div>
  );
}

export default App;
