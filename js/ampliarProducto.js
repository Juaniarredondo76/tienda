export function  ampliarInfoProducto(event){

   let producto={}
    if(event.target.classList.contains("btn")){
        console.log(event.target.parentElement)
        console.log(event.target.parentElement.querySelector("h4").textContent)
        console.log(event.target.parentElement.querySelector("h6").textContent)
        console.log(event.target.parentElement.querySelector("img").src)

         producto={
            foto:event.target.parentElement.querySelector("img").src,
            nombre:event.target.parentElement.querySelector("h4").textContent,
            precio:event.target.parentElement.querySelector("h6").textContent,

        }
        //mostrar los datos del producto en el modo

        let etiquetaNombreProducto=document.getElementById("nombreProducto")
        etiquetaNombreProducto.textContent=producto.nombre

        let etiquetaPrecioProducto=document.getElementById("precioProducto")
        etiquetaPrecioProducto.textContent=producto.precio

        let etiquetaImagenProducto=document.getElementById("imagenProducto")
        etiquetaImagenProducto.src=producto.foto
        
        let etiquetaDescripcionProducto=document.getElementById("descripcionProducto")
        etiquetaDescripcionProducto.textContent=producto.descripcion
    }
    return producto
}