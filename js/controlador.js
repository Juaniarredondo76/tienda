//importacion de elementos 
import {llenarTienda} from "./llenarTienda.js"
import {ampliarInfoProducto} from "./ampliarProducto.js"

//llamo a la funcion llenar tienda 
llenarTienda()

//llamar a la funcion ampliarInfoProducto
let modalinfoproducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))
let listaProducto=document.getElementById("fila")
listaProducto.addEventListener("click",function(event){

    ampliarInfoProducto(event)
    modalinfoproducto.show()
    
})
