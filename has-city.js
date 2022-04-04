const hasCity = (country,arr) => {
    return (city) =>{
        return arr.includes(city) ? city+ " is a city from "+country : city + " is not a city from "+country
    }
}