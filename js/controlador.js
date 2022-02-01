//importacion de elementos 
import {llenarTienda} from "./llenarTienda.js"
import {ampliarInfoProducto} from "./ampliarProducto.js"
import{agregarCarrito} from "./agregarAlCarrito.js"


//variable global de la tienda 
let producto={}
let carrito=[]
let contador={}

//llamo a la funcion llenar tienda 
llenarTienda()

//llamar a la funcion ampliarInfoProducto
let modalinfoproducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))
let listaProducto=document.getElementById("fila")
listaProducto.addEventListener("click",function(event){

    producto=ampliarInfoProducto(event)
    console.log(producto)
    modalinfoproducto.show()
    
})

//LLAMO LA FUNCION AGREGAR AL CARRITO
let bottonAgregarCarrito=document.getElementById("bottonagregarCarrito")
    bottonAgregarCarrito.addEventListener("click",function(){
   
        let etiquteCantidadProducto=document.getElementById("cantidadProducto").value
        producto.cantidad=etiquteCantidadProducto

//AGREGO EL PRODUCTO AL CARRITO 
        carrito.push(producto)

        console.log(carrito)
        modalinfoproducto.hide()
//LLAMAR AGREGAR CARRITO 
        agregarCarrito(carrito)

 let contador=document.getElementById()




})
