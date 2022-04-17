let check = (obj1,obj2,compare) => {
    let keys1 = Object.keys(obj1)
    let keys2 = Object.keys(obj2)

    if(keys1.length === keys2.length &&
        keys1.every(function (element) {
          return keys2.includes(element);
        }))
    keys1.forEach((key,index) => {
        if(typeof(obj1[key]) == "object"){
            compare = check(obj1[key],obj2[key],compare)
        }else{
            if(obj1[key] == obj2[key] && compare == true)
            compare = true;
            else {
            compare = false;
            }
        }
    });
    else
    compare = false
    return compare
}

obj1 = {
    a:1,
    b:2,
    c:{
        d:'helllo'
    }
}

obj2 = {
    a:1,
    c:{
        d:'helllo'
    },
    b:2
}

console.log(check(obj1,obj2,true))