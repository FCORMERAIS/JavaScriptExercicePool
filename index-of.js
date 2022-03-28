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

const lastIndexOf  = (arr,n) => {

}

const includes  = (arr,n) => {
    
}