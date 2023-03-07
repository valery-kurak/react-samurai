import React from 'react';
import './App.css';
import Login from "./components/Login/Login";
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='dialogs/*'
                               element={<DialogsContainer/>}/>
                        <Route path='profile'
                               element={<ProfileContainer/>}/>
                        <Route path='profile/:userId'
                               element={<ProfileContainer/>}/>
                        <Route path='login'
                               element={<Login/>}/>
                        <Route path='users/*'
                               element={<UsersContainer/>}/>
                        <Route path='news/*'
                               element={<News/>}/>
                        <Route path='music/*'
                               element={<Music/>}/>
                        <Route path='settings/*'
                               element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default connect(mapStateToProps, { initializeApp })(App);
