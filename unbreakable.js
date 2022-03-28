const split = (arr,n) => {
    let result = []
    let str = ""
    for (let index = 0; index < arr.length; index++) {
        let count = 0
        for (let i = 0; i < n.length; i++) {
            while (arr[index+count] == n[i+count]) {
                count++
            }
        }
        if (count == n.length) {
            result.push(str+n)
            str = ""
            index =+ n.length
        }else {
            str += arr[index]
        }
    }
}

const join = (arr,n) => {
    let str = ""
    for (let index = 0; index < arr.length; index++) {
        str +=arr[index]+n
    }
    return str
}