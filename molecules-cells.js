const RNA = (arr) => {
    arr = arr.split('')
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] == 'G') {
            arr[index] = arr.replace(/.$/, 'C');
        }else if (arr[index] == 'C') {
            arr[index] = arr.replace(/.$/, 'G');
        }else if (arr[index] == 'T') {
            arr[index] = arr.replace(/.$/, 'A');
        }else  {
            arr[index] = arr.replace(/.$/, 'U');
        }
    }
    return arr.join("")
}

const DNA = (arr) => {
    arr = arr.split('')
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] == 'C') {
            arr[index] = arr.replace(/.$/, 'G');
        }else if (arr[index] == 'G') {
            arr[index] = arr.replace(/.$/, 'C');
        }else if (arr[index] == 'A') {
            arr[index] = arr.replace(/.$/, 'T');
        }else  {
            arr[index] = arr.replace(/.$/, 'A');
        }
    }
    return arr.join('')
}