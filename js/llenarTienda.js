//controlador para llenar dinamicamente la tienda

export function llenarTienda(){
    let productos=[
        {nombre:"aretes",precio:150000,foto:"../img/aretas_5.jpg",descripcion:"aretas personalizadas"},
        {nombre:"bolso",precio:300000,foto:"../img/bolso_3.webp",descripcion:"bolso de todos los estilos deseados"},
        {nombre:"cartuchera",precio:600000,foto:"../img/cartuchera_2.webp",descripcion:"cartuchera de todos los estilos y tamaños"},
        {nombre:"buso",precio:700000,foto:"../img/buso_2.webp",descripcion:"buso de todos los estiloss"},
        {nombre:"zapatos",precio:800000,foto:"../img/zapatos.webp",descripcion:"zapatos personalisado de lilo y stitch"},
        {nombre:"cogin",precio:50000,foto:"../img/cogin_2.webp",descripcion:"personalisa tu cogin como lo desees"},
        {nombre:"cuaderno",precio:100000,foto:"../img/cuaderno_2.webp",descripcion:"variedad de cuadernos con tus estilos favoritos de lilo y stitch"},
        {nombre:"lampara",precio:2000000,foto:"../img/lampara_4.webp",descripcion:"lampara con luz led de stitch"},
        {nombre:"medias",precio:80000,foto:"../img/medias_3.webp",descripcion:"medias de tus estilos favoritos de lilo y stitch"},
        {nombre:"pijama",precio:7000000,foto:"../img/pijama_2.webp",descripcion:"pijamas enteras de stitch y angela"},
        {nombre:"pijama dos piesas",precio:500000,foto:"../img/pijama_2piesas_2.jpg",descripcion:"pijamas de dos piesas"},
        {nombre:"sandalias",precio:120000,foto:"../img/sandalias_2.webp",descripcion:"sandalias de lilo y stitch"},
        {nombre:"pop",precio:50000,foto:"../img/pop_2.webp",descripcion:"pop de stitch"},
        {nombre:"peluche pequeño",precio:200000,foto:"../img/peluche_pequeños_2.webp",descripcion:"mini-peluche de stitch"},
        {nombre:"posillo",precio:50000,foto:"../img/posillo_2.webp",descripcion:"posillo personalisado de lilo y stitch"},
        {nombre:"sepillo",precio:20000,foto:"../img/ssepillo.jpg",descripcion:"sepillos de lilo y stitch"},
        {nombre:"termo de lilo y stitch",precio:50000,foto:"../img/termo_5.jpg",descripcion:"termo personalisado de lilo y stitch"},
        {nombre:"juguetes de figuras",precio:50000,foto:"../img/juguetes_figura.jpg",descripcion:"termo personalisado de lilo y stitch"},
        {nombre:"pantunflas",precio:330000,foto:"../img/pantunflas_2.webp",descripcion:"termo personalisado de lilo y stitch"},
        {nombre:"gorro",precio:20000,foto:"../img/gorro.webp",descripcion:"gorro personalisado de lilo y stitch"},
]
    
   
   //rutina para recorrer el arreglo y vreae las trajetas de cada producto 
   //crear una referencia a un elemento "padre" o "base" donde anclaremos los demas 

    let  flila=document.getElementById("fila")
    //2. necesito recorrer el arreglo 
    productos.forEach(function(producto){

    //3. CREAMOS LOS ELEMENTOS NECESARIOS PARA PINTAR LOS PRODUCTOS
    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("btn-outline-danger")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")
    

    let imagen=document.createElement("img")
    imagen.classList.add("card-img-top")
    imagen.classList.add("p-3")
    imagen.src=producto.foto

    let separador=document.createElement("hr")
    separador.classList.add("w-50")
    separador.classList.add("mx-auto")    
    separador.classList.add("d-block")


    let nombre=document.createElement("h4")
    nombre.classList.add("dark")
    nombre.classList.add("fw-bold")
    nombre.classList.add("text-center")
    nombre.classList.add("max-3")
    nombre.textContent=producto.nombre

    let precio=document.createElement("h6")
    precio.classList.add("btn-outline-danger")
    precio.classList.add("text-center")
    precio.classList.add("text-muted")
    precio.textContent="$"+producto.precio
    
    let botonAmpliarInfo=document.createElement("button")
    botonAmpliarInfo.setAttribute("type","button")
    botonAmpliarInfo.classList.add("btn")
    botonAmpliarInfo.classList.add("btn-outline-dark")
    botonAmpliarInfo.classList.add("mx-2")
    botonAmpliarInfo.classList.add("h-100")
    botonAmpliarInfo.classList.add("mb-2")
    
    botonAmpliarInfo.textContent="ver producto"
    
    

        //vamos a anclar (poner)(disponer) las etiquetas que acabamos de crear
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(botonAmpliarInfo)
        columna.appendChild(tarjeta)
        flila.appendChild(columna)

        


        console.log(productos);

    })

}
 