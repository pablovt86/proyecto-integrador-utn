
let d = document;

let form = d.querySelector("form");
let estado  = d.querySelector(".estado");
let button = d.querySelector('button');
let actEstado = d.querySelector('#estadoDisable') 



form.addEventListener("submit", function(e){
   e.preventDefault();

 if(!e.target.nombre.value == "" && !e.target.email.value == "" && !e.target.mensaje.value == "" && !e.target.asunto.value == ""){
     
    emailjs.init("gIzcycS6ii9u5BLco");
  

   let data = {
   from_name : e.target.nombre.value,
    from_email: e.target.email.value,
    mensaje: e.target.mensaje.value,
    subject: e.target.asunto.value,
};

emailjs.send('service_srj5h3i','template_zufw3mb', data)
          .then(function(response) {
              if(response.text === 'OK'){
                alert("gracias ya se registro su envio! a la brevedad te contesto!!")
                  location.reload()

              } 
             console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
          }, function(err) {
              alert('Ocurrió un problema al enviar el correo');
             console.log("FAILED. error=", err);
          });

        

        }else{
            var parrafo = document.createElement("p").style.color = "red";
            parrafo = "el campo email es obligatorio, para el envio!, gracias por tratar de contactarse los saluda pabloVt";
            
         form.insertAdjacentHTML("afterend", parrafo);
         location.reload()

        }
})




        
 
        




console.log("conectado")