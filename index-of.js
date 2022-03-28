const indexOf = (arr,n,begin) =>  {
    if (typeof begin !== 'undefined') {
        for (let index = begin; index < arr.length; index++) {
            if (n === arr[index]) {
                return index
            }
        }
    }else {
        for (let index = 0; index < arr.length; index++) {
            if (n === arr[index]) {
                return index
            }
        }
    }
    return -1
}

const lastIndexOf  = (arr,n,begin) => {
    let count = 0
    if (typeof begin !== 'undefined') {
        for (let index = begin; count != arr.length; index--) {
            if (n === arr[index]) {
                return index
            }
            count++
            if (index == 0) {
                index = arr.length -1 
            }
        }
    }else {
        for (let index = arr.length -1; count != arr.length; index--) {
            if (n === arr[index]) {
                return index
            }
            count++
            if (index == 0) {
                index = arr.length -1 
            }
        }
    }
    return -1
}

console.log(lastIndexOf([0, 0, 't', 't'], 't'))

const includes  = (arr,n) => {
    
}