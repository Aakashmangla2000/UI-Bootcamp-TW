obj = {
    a:1,
    b:2,
    c: {
        d: "hello"
    }
}

let stringify = (obj) => {
    let newObj = "{"
    let keys = Object.keys(obj)
    keys.forEach((key,index) => {
        if(typeof(obj[key]) == "object"){
            newObj += `"${key}":`
            newObj += stringify(obj[key])
        }
        else
            if(typeof(obj[key]) != "string")
                newObj += `"${key}":${obj[key]}`
            else
                newObj += `"${key}":"${obj[key]}"`
        if(index != keys.length - 1) 
        newObj += ","
    });
    newObj += "}"
    console.log(newObj)
    return newObj
}

stringify(obj)
console.log(JSON.stringify(obj))