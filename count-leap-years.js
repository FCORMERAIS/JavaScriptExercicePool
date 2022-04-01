const countLeapYears = (n) => {
    let a = 1
    let count = 0
    while (n.getFullYear() != a) {
        if (new Date("02-29-"+a) === true) {
            count++
        }
        a++
    }
    console.log(count)
    return count
}