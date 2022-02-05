const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === 'sunny') {
    para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
  } else if (choice === 'rainy') {
    para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
  } else if (choice === 'snowing') {
    para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
  } else if (choice === 'overcast') {
    para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
  } else {
    para.textContent = '';
  }
}

function add7(x) {
    return x + 7
  }

function multiply(x,y) {
    return x * y
}

//Function to return the string passed in with proper case
function properCase(string) {
    let lowerCaseString = string.toLowerCase()
    return lowerCaseString.charAt(0).toUpperCase() + lowerCaseString.slice(1)
}

//Function to return the last character of a string
function lastLetter(string) {
    return string.charAt(string.length - 1)
}
