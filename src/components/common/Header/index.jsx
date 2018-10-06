
import React from 'react';
import logo from '../../../logo.svg';
import '../../../App.css';

const Header = ({welcomeMessage = "Welcome"}) =>(
    <div className='App'>
        <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h1 className='App-title'>{welcomeMessage}</h1>
        </header>
        <p className='App-intro'>To get started, edit 
            <code>src/MainApp.js</code> and save to reload.
        </p>
    </div>
);

export default Header;
