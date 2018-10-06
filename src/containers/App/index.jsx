import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActionCreators from '../../actions/app';
import AppComponent from '../../components/App';

class App extends React.Component {
    componentDidMount() {
        this.props.appActions.loadApp();
    }
    render() {
        const { welcomeMessage } = this.props;
        return (
            <AppComponent
                welcomeMessage = {welcomeMessage}
            />
        );
    }
}

const mapStateToProps = state => ({
    welcomeMessage: state.app.welcomeMessage
});

const mapDispatchToProps = dispatch => ({
    appActions: bindActionCreators(appActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

