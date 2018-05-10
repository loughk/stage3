import React, { Component } from 'react';
import './App.css';

import {ComponentFunctional,ComponentClass,ComponentDefaultProps} from './components/test_component/test_component.js';
import CmpForm from './components/test_form/test_form.js';
import FootNav from './components/main/footnav.js';

// <cmp/>相当于render的return值。
function TestComponent(){
    return (
        <div>
            <header>Test Component</header>
            <section>每个页面需要单独的container,不要共用滚动条</section>
            {ComponentFunctional}
            {ComponentClass}
            <ComponentDefaultProps props2="这里的属性不会覆盖也不会被覆盖"/>
            <h1>.</h1>
            <h1>.</h1>
        </div>
    );
};

// 用属性定义替代方法定义,解决this问题。建议使用前检查属性是否重名。
// 方法定义建议用bind解决this问题。
// 属性定义在class(这里是App)中,方法定义在class的原型(这里是Component)中。因为是浅复制,所以不会影响所有的原型,只影响class的原型。
class App extends Component {
    state = {
        'cmp':''
    }
    clickShow = (proxy) => {
        let t = proxy.target;
        if(t.innerText === '组件'){
            this.setState({'cmp':<TestComponent/>});
        }else if(t.innerText === '空白'){
            this.setState({'cmp':''});
        }else if(t.innerText === '表单'){
            this.setState({'cmp':<CmpForm/>});
        }else if(t.innerText === 'ref获取html元素'){
            this.refs.element.style.backgroundColor = '#f00';
        }
    }
    render() {
        return (
            <div className="App flexbox">
                <ul className="navs" style={{'border':'3px solid #666'}} onClick={this.clickShow}>
                    <li><button>组件</button></li>
                    <li><button>空白</button></li>
                    <li><button>表单</button></li>
                    <li><button ref="element">ref获取html元素</button></li>
                </ul>
                <div className="container">{this.state.cmp}</div>
                <FootNav/>
            </div>
        );
    }
}
// console.dir(App);
// console.dir(Component);
// console.dir(React.Component);

export default App;