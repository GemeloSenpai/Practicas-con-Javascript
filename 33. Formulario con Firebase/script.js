// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Importante configurar para hacer el envio de los datos buscar doc en pagina firebase
const firebaseConfig = {
    apiKey: "AIzaSyDSvuGIlLx03QW98XuqiAMPs3tnVXjpYnQ",
    authDomain: "datos-de-formulario-10b7d.firebaseapp.com",
    projectId: "datos-de-formulario-10b7d",
    storageBucket: "datos-de-formulario-10b7d.appspot.com",
    messagingSenderId: "450635528855",
    appId: "1:450635528855:web:8e4aee3c032f282b94c7d2",
    measurementId: "G-16EMFQSKCP"
  };

// Initialize Firebase (corregir)
firebase.initializeApp(firebaseConfig); // correcion hecha


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore(); // correcion hecha



// evento escucha para un submit
document.getElementById('formulario').addEventListener('submit', (event) => {
    // agarramos el evento y usamos preventDefault(), previene la accion por defecto
    event.preventDefault();

    //validamos campo nombre
    let entradaNombre = document.getElementById('name')
    let errorNombre = document.getElementById('nameError') // agarramos el error

    if (entradaNombre.value.trim() === '') {
        errorNombre.textContent = 'Por favor, introduzca su nombre'
        errorNombre.classList.add('error-message')
    } else {
        errorNombre.textContent = ''
        errorNombre.classList.remove('error-message')
    }

    //validamos correo electronico
    let emailEntrada = document.getElementById('email')
    let emailError = document.getElementById('emailError')
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // patron de validacion basico

    if (!emailPattern.test(emailEntrada.value)) {
        emailError.textContent = 'Por favor, introduzca un email valido'
        emailError.classList.add('error-message')
    } else {
        emailError.textContent = ''
        emailError.classList.remove('error-message')
    }

    //validamos contraseña
    let contrasenaEntrada = document.getElementById('password')
    let contrasenaError = document.getElementById('passwordError')
    let contrasenaPattern =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;

    if (!contrasenaPattern.test(contrasenaEntrada.value)) {
        contrasenaError.textContent = 'La contraseña debe tener almenos 8 caracteres, numeros, mayus y minus y caracteres especiales'
        contrasenaError.classList.add('error-message')
    } else {
        contrasenaError.textContent = ''
        contrasenaError.classList.remove('error-message')
    }

    //si todos los campos son validos enviamos el form
    // si los tres son distintos a null
    if (!errorNombre.textContent && !emailError.textContent && !contrasenaError.textContent) {
        
        // backend que reciba la info
        db.collection("users").add({
            nombre: entradaNombre.value,
            email: emailEntrada.value,
            password: contrasenaEntrada.value
        }).then((docRef) => {
            alert("El formulario se ha enviado con exito", docRef.id);// correcion hecha
            document.getElementById('formulario').reset(); // id del form
        }).catch((error) => {
            alert(error)// correcion hecha
        });
    }
})// error de paratesis pero se corrigio
// antes de agrear crear el elemento de coleccion en firebase