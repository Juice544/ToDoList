import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Home from './Home';
import List from './List';
import Video from './Video';
import Pictures from './Pictures';

const style = {
    navlink: {
        color: 'white',
        textDecoration: 'none', 
        padding: '10px'
    },
    navlinkActive: {
        color: 'green',
        textDecoration: 'underline'
    },
    nav: {
        display: 'flex',
        justifyContent: 'flex-start',
        width: '100%',
        flexWrap: 'wrap'
    },
    header: {
        backgroundColor: '#2d2d44',
        display: 'flex',
        alignItems: 'center',
        padding: '5px'
    }
}

class Main extends Component {
    render() { 
        return (
            <Router>
                <div style = {{width: '100%', height: '100vh'}}>
                    <header style = {style.header}>
                        <nav style = {style.nav}>
                            <NavLink exact to="/"  style = {style.navlink} activeStyle = {style.navlinkActive}>Главная</NavLink>  
                            <NavLink to="/to-do-list" style = {style.navlink} activeStyle = {style.navlinkActive}>Список дел</NavLink>  
                            <NavLink to="/pictures" style = {style.navlink} activeStyle = {style.navlinkActive}>Пикчи</NavLink>
                            <NavLink to="/video" style = {style.navlink} activeStyle = {style.navlinkActive}>Видосик</NavLink>
                        </nav>
                    </header>
                    <main style = {{height: 'calc(100% - 61px)'}}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/to-do-list" component={List} />
                            <Route path="/pictures" component= {Pictures} />
                            <Route path="/video" component= {Video} />
                        </Switch>
                    </main> 
                </div>
            </Router>
            );
    }
}
 
export default Main;