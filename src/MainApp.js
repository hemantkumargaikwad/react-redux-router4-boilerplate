import React from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from './containers/App';
import About from './components/About';
import Topic from './components/Topics';
import './App.css';

class MainApp extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path='/' component={App}/>
                    <Route path='/about' component={About}/>
                    <Route path='/topics' component={Topic}/>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = () => ({
    
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);

