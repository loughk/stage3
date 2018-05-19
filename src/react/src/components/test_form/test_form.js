import React, { Component } from 'react';

class CmpForm extends Component{
    state = {
        'txt':'',
        'area':'',
        'opts':'mango'
    }
    change = (proxy) => {
        let t = proxy.target;
        if(t.type === 'text'){
            this.setState({'txt': t.value});
        }else if(t.type === 'textarea'){
            this.setState({'area': t.value});
        }else if(t.tagName === 'SELECT'){
            console.dir(document.getElementsByTagName('select')[0])
            this.setState({'opts': t.value});
        }
        
    }
    render(){
        return (
            <div class="container">
                <h4>单向数据流;输入受控</h4>
                <h4>input</h4>
                <p><label>默认value属性-锁定状态</label><input type="text" value="锁定就改不了,而且不写readOnly会报warning" readOnly/></p>
                <p><label>动态value属性-没锁状态</label><input type="text" value={this.state.txt} onChange={this.change}/></p>
                <p><label>无value属性-没锁状态</label><input type="text" placeholder="但没绑定数据"/></p>
                <h4>textarea</h4>
                <p><textarea value={this.state.area} onChange={this.change}/></p>
                <h4>select</h4>
                <p>
                    <select value={this.state.opts} onChange={this.change}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </p>
                <h1>.</h1>
                <h1>.</h1>
            </div>
        )        
    }
};

export default CmpForm;