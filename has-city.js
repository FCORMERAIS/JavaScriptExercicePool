const hasCity = (country,arr) => {
    return (city) =>{
        return city === country.city ? city+ " is a city from "+country : city + " is not a city from "+country
    }
}