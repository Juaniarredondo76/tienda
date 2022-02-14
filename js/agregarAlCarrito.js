
export function agregarCarrito(carrito){

    //CREAR UNAREFERENCIA 
    let pildora=document.getElementById("pildora")
    pildora.classList.remove("invisible")

    //rutina para recorrer el carrito y sumar las cantidades
    console.log(carrito)

    let  contador=0
    
    carrito.forEach(function(producto) {
       
        console.log(producto.cantidad)
        contador=contador+Number(producto.cantidad)

    
    })
        
    pildora.textContent=contador

   

}