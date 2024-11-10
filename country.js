const searchCountry = () => {
  const resultElement = document.querySelector(".result");
  const statusElement = document.querySelector(".status");
  const nameElement = document.querySelector(".name");
  const country = document.getElementById("countrySelect").value;
  const capitalElement = document.querySelector(".capital");
  const populationElement = document.querySelector(".population");
  const flagElement = document.querySelector(".flag");

  statusElement.textContent = `Searching.... ${country}`;

  capitalElement.textContent = "";
  populationElement.textContent = "";
  flagElement.textContent = "";

  const endpoint = `https://restcountries.com/v3.1/name/${country}`;
  axios
    .get(endpoint)
    .then((response) => {
      const name = country;
      const capital = response.data[0].capital[0];
      const population = response.data[0].population;
      const flag = response.data[0].flags.png;
      const flagImg = `<img src="${flag}" alt="Flag of ${name}" width="100"/>`;

      statusElement.textContent = `Found ${name}`;
      capitalElement.textContent = `Capital ${capital}`;
      populationElement.textContent = `Population ${population}`;
      flagElement.innerHTML = flagImg;
    })
    .catch((err) => {
      statusElement.textContent = `Country not found: ${country}`;
      capitalElement.textContent = "";
      populationElement.textContent = "";
      flagElement.textContent = "";
    });
};

const populateCountries = () => {
  const countrySelect = document.getElementById("countrySelect");
  const endpoint = "https://restcountries.com/v3.1/all";

  axios
    .get(endpoint)
    .then((response) => {
      response.data.forEach((country) => {
        const option = document.createElement("option");
        option.value = country.name.common;
        option.textContent = country.name.common;
        countrySelect.appendChild(option);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

window.onload = populateCountries;
