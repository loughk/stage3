import React, { Component } from 'react';
import '../../css/test_component.css';

// 函数式组件
let ComponentFunctional = (props) => {
    // console.log(this);
    // 如果是箭头函数,this指向App;原型是Object;
    let renderArr = [];
    for(let k in props){
        renderArr.push(<p key={props[k]}>{props[k]}</p>);
    };

    return (
        <div>
            <h4>Test_Functional_Component</h4>
            {renderArr}
        </div>
    );
};

// 类组件
class ComponentClass extends Component{
    render(){
        // console.log(this);
        // this指向实例;原型是Component;
        return (
            <div>
                <h4>Test_Class_Component</h4>
                <p>{this.props.props1}</p>
                <p>{this.props.props2}</p>
            </div>
        );
    }
};

// 定义静态属性
class ComponentDefaultProps extends Component{
    static defaultProps = {
        'props1':'不同位置定义默认属性建议用Object.assign(),注意属性顺序'
    };
    render(){
        return (
            <div>
                <h4>Test_defaultProps</h4>
                <p>{this.props.props1}</p>
                <p>{this.props.props2}</p>
                <p>{this.props.props3}</p>
            </div>
        );
    }
};
// ComponentDefaultProps.defaultProps={'props3':'直接赋值会覆盖静态属性'};
Object.assign(ComponentDefaultProps.defaultProps,{'props3':'直接赋值会覆盖静态属性'});

let cmp1 = <ComponentFunctional props1="形参对象Object的属性1" props2="对象形参Object的属性2"/>;
let cmp2 = <ComponentClass props1="实例对象属性props的属性1" props2="实例对象属性props的属性2"/>;
export {
    cmp1,
    cmp2 as ComponentClass,
    ComponentDefaultProps
};