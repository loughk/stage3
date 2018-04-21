function unitModuleA(){
    return unitModuleA;
};

var objB = {
    'keyB1':'valueB1',
    'keyB2':'valueB2'
};

function unitModuleC(){
    console.log('unitModuleC printed');
    return 'unitModuleC completed'
};

var arrD = ['D1','D2'];

// module.exports只能输出一个。
module.exports = {
    'unitModuleA':unitModuleA,
    'objB':objB
};

// exports可以输出多个。
// exports.unitModuleC = unitModuleC;
// exports.arrD = arrD;