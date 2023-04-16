
var fragment = document.createDocumentFragment();
var ul  = document.getElementById('ul');
// let url3 = ' https://v3.football.api-sports.io/fixtures?live=all'
// let url2 = 'https://mindicador.cl/api/dolar'    
 let url = 'https://apiv2.allsportsapi.com/football/?met=Countries&APIkey=90ddcb1f66801f15c397799aa8e2119409a4f687b5ac720c933a5c6bb2e1b231';
const api = new XMLHttpRequest();

// api.open('GET', url ,true);
// api.send();
// api.onreadystatechange = function(){
//   if(this.status == 200 && this.readyState == 4){
//   datos = JSON.parse(this.responseText);
// let paises = datos.result.slice(0,10);
//    paises.forEach(function(pais) {
//     let li = document.createElement('li');
//     let a = document.createElement('a');
//      li.textContent = pais.country_name ;
//      a.setAttribute("href",pais.country_logo)
//      a.appendChild(li)
//     fragment.appendChild(a);

// });

// ul.appendChild(fragment);

// }
// }



   






 
// var myHeaders = new Headers();
// myHeaders.append("x-rapidapi-key", "7cafa3f1cd04400be25a17a58a4f1eba");
// myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// fetch("https://v3.football.api-sports.io/fixtures?live=all", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

var settings = {
    "url": "https://v3.football.api-sports.io/leagues",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "x-rapidapi-key": "7cafa3f1cd04400be25a17a58a4f1eba",
      "x-rapidapi-host": "v3.football.api-sports.io"
    },
  };
  
  $.ajax(settings).done(function (response) {
let datosAlemania = response[6]; 

    let profileImage = document.createElement('img');
    profileImage.src = datosAlemania.country.flag;
    let p = document.createElement('p');

    
    let a = document.createElement('a');
    //  li.textContent = pais.country_name ;
    //  a.setAttribute("href",pais.country_logo)
     a.appendChild(li)
    fragment.appendChild(a);


ul.appendChild(fragment);
    console.log(response.response[6]);
  });