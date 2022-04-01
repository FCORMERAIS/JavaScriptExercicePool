const bloodySunday = (n) =>{
    let newday = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ]
      res =dayOfTheYear(n)
      return newday[res%6]
}