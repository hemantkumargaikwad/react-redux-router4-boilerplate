import React from 'react';
import { Link } from "react-router-dom";
import Header from '../common/Header';

const App = ({welcomeMessage}) => {
    return (
        <div>
            <Header 
                welcomeMessage = {welcomeMessage}
            />
            <hr/>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/topics">Topics</Link>
                </li>
            </ul>
            <hr />
        </div>
    );
}

export default App;


