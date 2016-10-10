var JUGADOR = { turno:1, turnos:2 };
var ESTADO = { JUGANDO: 0, ESPERANDO: 1, TERMINADO:2 };
var x = "x";
var o = "o";
var count = 0;
var o_win = 0;
var x_win = 0;
var Key ={
  //Methods
  draw_symbol: function(button){//Dibujar si es X o Y
    var play = document.getElementById("board");//trae el elemento con id Board
    var button_keys = play.querySelectorAll("#matrix button");
    var self = Key;
    button_keys[play].style.backgroundColor = "red";
    button_keys[play].style.textContent = x;
  },
  pushDOMElement: function(){
    this.style.color="green";
  },
};
var keys_push = [];
document.addEventListener("DOMContentLoaded",function(event){
  //Una vez la página ha cargado.
  var play = document.getElementById("board");//trae el elemento con id Board
  var button_keys = play.querySelectorAll("#matrix button");//trae todos botonos dentro de mi id matrix
  for(i=0;i<button_keys.length;i++){//le da el evento listener a los 9 botones
      button_keys[i].addEventListener("click", Key.draw_symbol(button_keys[i])//llama a la función draw_symbol
      );//addEventListener
  }
});
