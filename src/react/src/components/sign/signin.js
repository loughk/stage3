import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SignIn extends Component{
    toIndex = () => {
        // 不要写在render里。在render里加括号会一直执行。
        this.props.history.push({'pathname':'/'})
    }
    render(){
        // console.log(this.props);
        return (
            <div className="container">
                <h4>登录</h4>
                <Link to="/">首页</Link>
                <p onClick={this.toIndex}>跳转到首页</p>
            </div>
        );
    }
};

export default SignIn;