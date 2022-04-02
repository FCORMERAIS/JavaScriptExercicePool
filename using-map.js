function citiesOnly(arr) {
    var res = arr.map(function (officer) {
        return officer.city
    });
    return res
}

const upperCasingStates= (arr) =>{
    return arr.map(function (string) {
      let arr = string.split(" ");
      return arr
        .map(function (string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        })
        .join(" ");
    });
}

const fahrenheitToCelsius = (arrF) =>{
    return arrF.map(function (fahrenheit) {
        return Math.floor(((fahrenheit.split("°F")[0] - 32) * 5) / 9) + "°C";
    })
}

const trimTemp = (arr) => {
    var res = arr.map(function (officer) {
        officer['temperature'] = officer['temperature'].match(/\S/g).join("")
        return officer
    });
}