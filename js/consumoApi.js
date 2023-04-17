
var fragment = document.createDocumentFragment();
var ul  = document.getElementById('ul');
// let url3 = ' https://v3.football.api-sports.io/fixtures?live=all'
// let url2 = 'https://mindicador.cl/api/dolar'    
 let url = 'https://apiv2.allsportsapi.com/football/?met=Countries&APIkey=90ddcb1f66801f15c397799aa8e2119409a4f687b5ac720c933a5c6bb2e1b231';
const api = new XMLHttpRequest();

api.open('GET', url ,true);
api.send();
api.onreadystatechange = function(){
  if(this.status == 200 && this.readyState == 4){
  datos = JSON.parse(this.responseText);
let paises = datos.result.slice(0,10);
   paises.forEach(function(pais) {
    let li = document.createElement('li');
    let a = document.createElement('a');
     li.textContent = "visualize la bandera del"+ "  " + pais.country_name ;
     a.setAttribute("href",pais.country_logo)
     a.appendChild(li)
    fragment.appendChild(a);

});

ul.appendChild(fragment);

}
}


// wizard inicio -----------------
var current_fs, next_fs, previous_fs; 
var left, opacity, scale; //propiedades de conjunto de campos que animaremos
var animating; //bandera para evitar fallas rápidas de múltiples clics

$(".next").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
  //activa el siguiente paso en la barra de progreso usando el índice
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
//muestra el siguiente conjunto de campos
  next_fs.show(); 

// ocultar el conjunto de campos actual con estilo
  current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
		//como la opacidad de current_fs se reduce a 0 - almacenado en "ahora"
//1. escalar current_fs hasta 80%


			scale = 1 - (1 - now) * 0.2;
      //2. traer next_fs desde la derecha (50%)
			left = (now * 50)+"%";
//3. aumentar la opacidad de next_fs a 1 a medida que avanza
      opacity = 1 - now;
			current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 

// esto proviene del complemento de aceleración personalizado
    easing: 'easeInOutBack'
	});
});

$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
//desactivar el paso actual en la barra de progreso
  $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
//muestra el conjunto de campos anterior
	previous_fs.show(); 
// ocultar el conjunto de campos actual con estilo
  current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//como la opacidad de current_fs se reduce a 0 - almacenado en "ahora"
    //1. escalar previous_fs de 80% a 100%
			scale = 0.8 + (1 - now) * 0.2;
      //2. tome current_fs a la derecha (50%) - desde 0%
			left = ((1-now) * 50)+"%";
//3. aumentar la opacidad de previous_fs a 1 a medida que avanza
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
    // esto proviene del complemento de aceleración personalizado

    easing: 'easeInOutBack'
	});
});




// end wizard


   






 
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