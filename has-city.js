const hasCity = (country,arr) => {
    return (city) =>{
        return arr.includes(city) ? city+ " is not a city from "+country : city + " is a city from "+country
    }
}