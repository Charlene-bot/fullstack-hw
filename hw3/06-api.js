const url = 'https://restcountries.eu/rest/v2/all';
let app = document.querySelector("#results");

let getData = (url) => {
  // Add your code here
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((country) => {
        console.log(
          `${country.name} - ${country.population}`

        );
        let element = document.createElement("div");
        let info = document.createTextNode(`${country.name} - ${country.population}`)
        element.append(info);
        app.append(element);

      });
    })
    .catch((error) => console.log("Error", error))
    //.finally(() => console.log("run no matter what"));
};

getData(url);
