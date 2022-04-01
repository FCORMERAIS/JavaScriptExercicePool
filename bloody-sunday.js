const bloodySunday = (n) =>{
  let newday = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  let res =dayOfTheYear(n)
  console.log(res)
  res--
  return newday[res%6]
}

const dayOfTheYear= (date) =>{
  let datesince = new Date();
  let days = 1;
  datesince.setFullYear(1, 0, days);
  while (date > datesince) {
    days++;
    datesince.setDate(datesince.getDate() + 1);
  }
  return days;
}