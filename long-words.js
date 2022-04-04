const longWords = (n) => n.every(tempo)

const tempo = (currentValue) => currentValue.length <= 5;