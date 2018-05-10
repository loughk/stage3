import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';

import './index.css';
import './lib/flexible.js';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import SignIn from './components/sign/signin.js';

class Index extends Component{
    render(){
        return (
            <Router>
                <div style={{'height':'100%'}}>
                    <Switch>
                        <Route exact path="/" component={App}/>
                        <Route path="/signin" component={SignIn}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
