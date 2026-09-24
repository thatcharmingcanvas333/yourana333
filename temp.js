

function checkTemperature(temp) {
  let result = "";

  if (temp < 20) {
    result = "Cold";
  } else if (temp >= 20 && temp <= 30) {
    result = "Moderate";
  } else {
    result = "Hot";
  }

  return result;
}

console.log(checkTemperature(15)); // Cold
console.log(checkTemperature(25)); // Moderate
console.log(checkTemperature(35)); // Hot