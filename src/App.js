import React, { Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from "react-router-dom";
import HeaderContainer from './components/Header/HeaderContainer';
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));

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
                    <Suspense fallback={<div>Loading...</div>}>
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
                    </Suspense>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default connect(mapStateToProps, { initializeApp })(App);
