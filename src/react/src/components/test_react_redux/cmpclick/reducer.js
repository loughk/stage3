export default (state = 0, action) => {
    // 这里的state只是一个自定义的参数，跟组件的state无关。
    // 组件中通过store.getState可以获取这里的state的值。
    // action返回的是一个对象，只是用来写条件的，就是单独分出一个层级。
    
    // state要有默认值,不然会报错。
    // 官方建议state不能修改，只读。
    var data = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case '+':
            return data + 1;
        default:
            return data;
    }
}