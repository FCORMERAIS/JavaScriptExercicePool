const split = (str, elem) =>{
    let arr = []
    for (let i = 0; i < str.length - elem.length+1; i++) {
        if (str.slice(i,i+elem.length) == elem) {
            arr.push(str.slice(0, i))
            str = str.slice(i + elem.length)
            i = 0
        }
    }
    arr.push(str)
    return arr
}

const join = (arr,n) => {
    let str = ""
    for (let index = 0; index < arr.length; index++) {
        str +=arr[index]+n
    }
    return str
}

console.log(join(['ee', 'ff', 'g', ''], ','))