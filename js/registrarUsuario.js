//IMPORTO LIBRERIA DE AUTENTICACION
import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js"

        //1.PARA REGUISTRAR UNA PERSONA EN SU APLICACION 
        let botonRegistro=document.getElementById("botonRegistro")
        botonRegistro.addEventListener("click" ,function(){
            event.preventDefault()

        let email=document.getElementById("cajaemail").value
        let password=document.getElementById("cajapassword").value
            console.log("estoy registrandome")

         //VALIDAR EL FORMULARIO
         //AGRREGAR LA RUTA para llevar los datos firebase
         //(hablar con el back)

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log ("TODO ESTA BIEN")
        })

        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
            // ..
            console.log("ERROR")

        });





})