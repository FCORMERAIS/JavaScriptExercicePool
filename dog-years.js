const planet = {
    earth : 1,
    mercury :  0.2408467,
    venus :  0.61519726,
    mars :  1.8808158,
    jupiter :  11.862615,
    saturn :  29.447498,
    uranus :  84.016846,
    neptune :  164.79132,
}

function dogYears(a, b) {
    var rep = b / 31557600  / planete[a] * 7
    return Math.round(rep * 100) / 100
}