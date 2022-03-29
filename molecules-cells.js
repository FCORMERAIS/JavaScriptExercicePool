const RNA = (arr) => {
    arr = arr.split('')
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] == 'G') {
            arr[index] ='C'
        }else if (arr[index] == 'C') {
            arr[index] ='G'
        }else if (arr[index] == 'T') {
            arr[index] ='A'
        }else  {
            arr[index] ='U'
        }
    }
    return arr.join("")
}

const DNA = (arr) => {
    arr = arr.split('')
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] == 'C') {
            arr[index] = 'G'
        }else if (arr[index] == 'G') {
            arr[index] = 'C'
        }else if (arr[index] == 'A') {
            arr[index] ='T'
        }else  {
            arr[index] ='A'
        }
    }
    return arr.join('')
}