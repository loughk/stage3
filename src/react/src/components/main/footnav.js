import '../../css/footnav.css';

import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class FootNav extends Component{
    render(){
        return (
            <ul className="footnav" style={{'bottom':0}}>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/signin">登录</Link></li>
            </ul>
        );
    }
};

export default FootNav;