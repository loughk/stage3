import React, { Component } from 'react';
import {connect} from 'react-redux';

import action from './action.js';

class CmpClick extends Component{
    // state = {
    //     "num":store.getState().ReCmpClick
    // }
    // adds = () => {
    //     // store(createStore(reducer))分发action的任务adds给reducer执行,用store.getState()获取reducer的自定义state。
    //     // 再次提醒：组件的state跟reducer的state是相互独立的，reducer的state不会直接写到组件的props中;这里的setState是this(实例)的方法，只是刚好跟store的方法getState名字类似而已，getState返回的数据的形式可能是return的state值或者{reducer:reducer的return的state值}。
    //     // console.log(store.getState());
    //     store.dispatch(action.adds());
    //     this.setState({
    //         "num":store.getState().ReducerClick
    //     })
    // }
    adds = () => {
        // console.log(this.props);
        // 
        this.props.action_adds();
    }
    render(){
        return (
            <div>
                <p>CmpClick的num : {this.props.ReducerClick}</p>
                <input type="button" value="增加" onClick={this.adds}/>
            </div>
        );
    }
};

// 设置需要写入到组件属性的reducers
const mapStateToProps = (state) => {
    return {
        ReducerClick: state.ReducerClick
    }
};

// 在this.props写入了mapStateToProps,并根据action分发内容给了reducers
export default connect(mapStateToProps,action)(CmpClick);