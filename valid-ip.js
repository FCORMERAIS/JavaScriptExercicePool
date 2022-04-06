const findIP  = (data) => { 
  const ipRegex = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/g;
  const ip = data.match(ipRegex);
  return ip;
}