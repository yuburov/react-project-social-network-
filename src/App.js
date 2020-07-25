import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderComponent from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";



function App(props) {
  return (
        <div className="app-wrapper">
          <HeaderComponent/>
          <Navbar/>
          <div className='app-wrapper-content'>
            <Route path='/login' component={Login}/>
            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
            <Route path='/users' render={() => <UsersContainer/>}/>
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music}/>
            <Route path='/settings' component={Settings}/>
          </div>
        </div>
  );
}

export default App;
