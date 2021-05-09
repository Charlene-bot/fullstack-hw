const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const fetch = require('node-fetch');
const { response } = require('express');

// Use Pug as the templating engine
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

// REST Countries URL
const url = 'https://restcountries.eu/rest/v2/all';

// Add your code here
app.use(express.static('/public')); 
app.get('/', (req, res) => {
  // render pug template for the index.html file

  results = [
    'Countries and Capitals',
    'Most Populous Countries',
    'Regions of the World',
  ];

  res.render('page', {
    heading: 'Countries of the World',
    results: results,
  });
});

app.get('/capitals', (req, res) => {
  // map the output array to create an array with country names and capitals
  // check for empty data in the output array
  fetch(url, { Method: 'Get' })
  .then((response) => response.json())
  .then((data) => {
    let results = [];
    data.forEach((country) => {
      const info = { 'name':country.name, 'capital':country.capital}
      console.log(info.name, info.capital);
       results.push(`${info.name}, -${info.capital}`);
      });
      res.render('page', {
        heading: 'Countries and Capitals',
        results: results,
      });
    })
  .catch((error) => console.log("Error", error))
  });
//  results = ['Afghanistan', 'Aland Islands', 'Albania'];

app.get('/populous', (req, res) => {
  // filter the output array for the countries with population of 5ß0 million or more
  // sort the resulting array to show the results in order of population
  // map the resulting array into a new array with the country name and formatted population

//  results = ['China', 'India', 'United States of America'];
  fetch(url, { Method: 'Get' })
    .then((response) => response.json())
    .then((data) => {
      let results = [];
      data.sort((a, b) => {
        return b.population - a.population;
      });
      
      data.forEach((country) => {
        const info = { 'name': country.name, 'population': country.population }
        if (country.population > 50000000) {
          console.log(info.name, info.population);
          results.push(`${info.name} -${Number(info.population).toLocaleString("en-US")}`);
        }
      });

      res.render('page', {
        heading: 'Most Populous Countries',
        results: results,
      });
    })
    .catch((error) => console.log("Error", error));
});

  app.get('/regions', (req, res) => {
    // reduce the output array in a resulting object that will feature the numbers of countries in each region
    // disregard empty data from the output array
    let results = [];
    let regionList = []; 
  
  
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
  
      data.forEach((country) => {
        if(country.region != ''){
          if(regionList[country.region] != null){
            regionList[country.region] += 1;
          }
          else{
            regionList[country.region] = 1; 
          }
        }
      }); 
  
      const array = Object.keys(regionList);
        for(let i = 0; i < array.length; i++) {
          results.push(`${array[i]} - ${regionList[array[i]]}`);
        }
  
      res.render('page', {
        heading: 'Regions of the World',
        results: results,
    });
  })
    .catch((error) => console.log("Error",error));
  });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
