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
    let tempo = -1
    if (typeof begin !== 'undefined') {
        for (let index = 0; index < arr.length-begin; index++) {
            if (n === arr[index+begin]) {
                tempo = index
            }
        }
        if (tempo !== -1) {
            return tempo
        }
    }else {
        for (let index = 0; index < arr.length; index++) {
            if (n === arr[index]) {
                tempo =index
            }
        }
        if (tempo !== -1) {
            return tempo
        }
    }
    return tempo
}

const includes  = (arr,n) => {
    
}