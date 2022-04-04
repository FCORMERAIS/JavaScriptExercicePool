const longWords = (n) => n.every(value => 5 <= value.length)

const oneLongWord = (n) =>n.some(value => 10 <= value.length)

const noLongWords = (n) => n.every(value => 7 !== value.length)