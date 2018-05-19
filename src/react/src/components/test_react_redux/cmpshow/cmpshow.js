import React, { Component } from 'react';
import {connect} from 'react-redux';

import store from '../redux/store.js';
import action from '../cmpclick/action.js';

// hack:如果不用redux的store.subscribe()监听或者react-redux的provider和connect等监听，就用父元素触发render，让所有子元素重新render以更新state。
// 官方建议使用react-redux
class CmpShow extends Component{
    state = {
        "num":6,
        "txt":"加上监听才实现了各组件通信。"
    }
    render(){
        return (
            <div>
                <p>{this.state.txt}</p>
                <p>{this.state.num + store.getState().ReducerClick}</p>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        ReducerClick: state.ReducerClick
    }
};

export default connect(mapStateToProps,action)(CmpShow);