const temaOscuro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill");
}
const temaClaro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
}
const cambiarTema = () => {
    document.querySelector("body").getAttribute("data-bs-theme") === "light" ?
        temaOscuro() : temaClaro();
}


const contenedorMascota = document.querySelector("#section1")

for (let i = 0; i < mascotas.length; i++) {
    if (mascotas[i].estado==="critico") {
        contenedorMascota.innerHTML += `
        <article class="card " style="width: 40rem;">
            <h3 class="card-title text-center fw-bold fs-3 text-capitalize">${mascotas[i].nombre}</h3>    
            <img src="${mascotas[i].imagen}" class="card-img-top h-50" alt="${mascotas[i].especie} ${mascotas[i].raza}">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Especie: ${mascotas[i].especie}</li>
                <li class="list-group-item">Raza: ${mascotas[i].raza}</li>
                <li class="list-group-item">Edad: ${mascotas[i].edad} años</li>
                <li class="list-group-item">Peso: ${mascotas[i].peso} kilos</li>
                <li class="list-group-item text-warning">Estado: ${mascotas[i].estado}</li>
            </ul>
        </article>`  
    }else{
        contenedorMascota.innerHTML += `
        <article class="card " style="width: 40rem;">
            <h3 class="card-title text-center fw-bold fs-3 text-capitalize">${mascotas[i].nombre}</h3>    
            <img src="${mascotas[i].imagen}" class="card-img-top h-50" alt="${mascotas[i].especie} ${mascotas[i].raza}">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Especie: ${mascotas[i].especie}</li>
                <li class="list-group-item">Raza: ${mascotas[i].raza}</li>
                <li class="list-group-item">Edad: ${mascotas[i].edad} años</li>
                <li class="list-group-item">Peso: ${mascotas[i].peso} kilos</li>
                <li class="list-group-item text-success">Estado: ${mascotas[i].estado}</li>
            </ul>
        </article>`  
    }
       
}

const contenedorClientes = document.querySelector("#section2")

mascotas.forEach(dueño => {

    contenedorClientes.innerHTML += `
    <article class="card" style="width: 20rem;">
        <div class="card-header text-capitalize fs-4 fw-bold ps-0">
            Cliente: ${dueño.dueño.nombreDueño}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item ps-4"><span class="fw-bold fs-5">Dueño de:</span> ${dueño.nombre}</li>
            <li class="list-group-item ps-4"><span class="fw-bold fs-5">Documento:</span> ${dueño.dueño.documento}</li>
            <li class="list-group-item ps-4"><span class="fw-bold fs-5">Contacto:</span> ${dueño.dueño.telefonoContacto}</li>
            <li class="list-group-item ps-4"><span class="fw-bold fs-5">Correo:</span> ${dueño.dueño.correo}</li>
        </ul>
    </article>
    `
});

const buscar = document.querySelector("#buscar");
const mascotaFiltrada = document.querySelector("#mascota-filtrada");

buscar.addEventListener("click", () => {
    const nombre = document.querySelector("#nombre");
    const contenido = nombre.value;
    let mascotaB = false
    mascotas.forEach((mascota, indice) => { // Añadimos el índice como segundo parámetro
        if (mascota.nombre == contenido) {
            mascotaB = true
            mascotaFiltrada.innerHTML = `
                <h2 class="text-center"> La mascota filtrada es: </h2>
                <h3 class="card-title text-center fw-bold fs-3 text-capitalize">${mascotas[indice].nombre}</h3>    
                <img src="${mascotas[indice].imagen}" class="card-img-top h-50" alt="${mascotas[indice].especie} ${mascotas[indice].raza}">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Especie: ${mascotas[indice].especie}</li>
                    <li class="list-group-item">Raza: ${mascotas[indice].raza}</li>
                    <li class="list-group-item">Edad: ${mascotas[indice].edad} años</li>
                    <li class="list-group-item">Peso: ${mascotas[indice].peso} kilos</li>
                    <li class="list-group-item text-success">Estado: ${mascotas[indice].estado}</li>
                </ul>
            `;
        }
    });
    if (mascotaB == false){
        alert("La mascota que estas buscando no existe")
    }

});







/* let fechaActual = new Date() //declaro la variable fechaActual para usarla mas adelante y calcular las edades de las mascotas

// creo el array de objetos de mascotas con 10 objetos distintos como lo dice el ejercicio


//1. registrar una nueva mascota

//creo la funcion agregar mascota
function agregarMascota() {
    //declaro el objeto nueva mascota al cual le ingresaremos los key con su value para despues hacerle push al array original
    const nuevaMascota = {

    }

    // pido la fecha de nacimiento para poder calcular la edad de las mascotas
    let fechaNacimiento = new Date(prompt("Ingrese la fecha de nacimiento de la mascota"))

    //aca agrego los key y value al objeto nueva mascota
    nuevaMascota.nombre = prompt("Ingrese el nombre de la mascota")
    nuevaMascota.especie = prompt("Ingrese la especie de la mascota")
    nuevaMascota.raza = prompt("Ingrese la raza de la mascota")
    nuevaMascota.fechaNacimiento = fechaNacimiento

    //para calcular la edad de la mascota utilizo la funcion getFullYear
    nuevaMascota.edad = (fechaActual - fechaNacimiento) / (1000 * 3600 * 24 * 360);
    nuevaMascota.peso = parseInt(prompt("Ingrese el peso de la mascota"))
    nuevaMascota.estado = prompt("Ingrese el estado de la mascota")
    nuevaMascota.dueño = {}

    //aca agrego el objeto dueño con sus key y value dentro del objeto nuevaMascota
    nuevaMascota.dueño.nombreDueño = prompt("Ingrese el nombre del propietario de la mascota")
    nuevaMascota.dueño.documento = prompt("Ingrese el documento del dueño de la mascota")
    nuevaMascota.dueño.telefonoContacto = Number(prompt("Ingrese el telefono de contacto del dueño de la mascota"))
    nuevaMascota.dueño.correo = prompt("Ingrese el correo del dueño de la mascota")

    //con el push le envio la informacion que esta en nuevaMascota al array mascotas
    mascotas.push(nuevaMascota)

    //aca muestro la informacion de la mascota que se agrego
    console.info(nuevaMascota)
    console.info("Mascota agregada con exito")
}

//2. Listar mascotas
//aca utilizo un for para recorrer el array mascotas y mostrar la informacion de cada mascota
function listar() {
    for (let i = 0; i < mascotas.length; i++) {
        console.info(mascotas[i])
    }
}

//3. Ver dueños
// aca utilizo un for para recorrer el array mascotas y mostrar la informacion de cada dueño
function verDueños() {
    for (let i = 0; i < mascotas.length; i++) {
        console.info(mascotas[i].dueño)
    }

}

//4. Buscar mascota por nombre

// aca utilizo un for para recorrer el array mascotas y mostrar la informacion de una mascota
function buscarMascota() {

    //declaro la variable mascota para comparar la mascota ingresada con las mascotas del array
    let mascota = prompt("ingresa el nombre de la mascota que deseas buscar:")
    for (let i = 0; i < mascotas.length; i++) {
        if (mascotas[i].nombre == mascota) { //si la mascota ingresada es igual al valor de nombre de la mascota del array, se muestra la informacion de la mascota
            console.info(mascotas[i])
        }
    }
}

//5. Mostrar mascotas que pertenezcan al mismo dueño

// aca utilizo un for para recorrer el array mascotas y mostrar las mascotas que pertenezcan al mismo dueño
function mascotasMismoDueño() {

    //declaro la variable dueño para comparar el nombre del dueño ingresado con el nombre del dueño de las mascotas del array
    let dueño = prompt("ingresa el nombre del dueño de las mascotas que deseas ver:")
    for (let i = 0; i < mascotas.length; i++) {
        if (mascotas[i].dueño.nombreDueño === dueño) { // si el nombre del dueño ingresado es igual al valor de nombre del dueño de la mascota del array, se muestra el nombre de la mascota
            console.info(mascotas[i].nombre)
        }

    }
}


//6. Actualizar informacion de mascota existente

function actualizaInfo() {

    // pido el nombre de la mascota a actualizar para buscarla en mi array
    let mascota = prompt("ingresa el nombre de la mascota que deseas actualizar:")

    //inicializo mascotaEncontrada en falso para que en el momento que se vuelva verdadero significa que la mascota fue encontrada
    let mascotaEncontrada = false

    // recorro el array mascotas y si el nombre de la mascota ingresada es igual al nombre de la mascota del array, se actualiza la informacion de la mascota
    for (let i = 0; i < mascotas.length; i++) {
        if (mascotas[i].nombre === mascota) {
            mascotaEncontrada = true

            // se le pide al usuario que ingrese la informacion que desea actualizar
            console.info(`Que infromacion deseas cambiar de la mascota? elije del 1 al 11:
            1. nombre
            2. especie
            3. raza
            4. fecha de nacimiento
            5. edad
            6. peso
            7. estado
            8. nombre del dueño
            9. documento del dueño
            10. numero del dueño
            11. correo
            0. volver al menu principal`)
            let eleccion = prompt("Elije una opcion")

            // se le pide al usuario que ingrese la nueva informacion y se actualiza la informacion de la mascota en base a la elecion del usuario
            switch (eleccion) {
                case "1":
                    mascotas[i].nombre = prompt("ingresa el nuevo nombre de la mascota:")
                    console.info("Cambio realizado")
                    break;
                case "2":
                    mascotas[i].especie = prompt("ingresa la nueva especie de la mascota:")
                    console.info("Cambio realizado")
                    break;
                case "3":
                    mascotas[i].raza = prompt("ingresa la raza del perro")
                    console.info("Cambio realizado")
                    break;
                case "4":
                    let nuevaFecha = new Date(prompt("ingresa la nueva fecha de nacimiento de la mascota:"))
                    mascotas[i].fechaNacimiento = nuevaFecha
                    console.info("Cambio realizado")
                    break;
                case "5":
                    mascotas[i].edad = new Date().getFullYear() - nuevaFecha.getFullYear()
                    console.info("Cambio realizado")
                    break;
                case "6":
                    mascotas[i].peso = Number(prompt("ingresa el nuevo peso de la mascota:"))
                    console.info("Cambio realizado")
                    break;
                case "7":
                    mascotas[i].estado = prompt("ingresa el nuevo estado de la mascota:")
                    console.info("Cambio realizado")
                    break;
                case "8":
                    mascotas[i].dueño.nombreDueño = prompt("ingresa el nuevo nombre:")
                    console.info("Cambio realizado")
                    break;
                case "9":
                    mascotas[i].dueño.documento = prompt("ingresa el nuevo documento:")
                    console.info("Cambio realizado")
                    break;
                case "10":
                    mascotas[i].dueño.telefonoContacto = Number(prompt("ingresa el nuevo telefono:"))
                    console.info("Cambio realizado")
                    break;
                case "11":
                    mascotas[i].dueño.correo = prompt("ingresa el nuevo correo:")
                    console.info("Cambio realizado")
                    break;
                case "0":
                    menu()

                default:
                    console.info("Ingresa una opcion valida")
                    break;
            }
        }

    }
    // si no se encuentra la mascota se vuelve a llamar a la funcion para que ingrese nuevamente el nombre de la mascota correcta
    if (!mascotaEncontrada) {
        console.info("la mascota no existe, intenta con otra")
        actualizaInfo()
    }
}

//7. Eliminar una mascota

function eliminarMascota() {
    // se crea una variable que almacena el nombre de la mascota que se desea eliminar
    let mascota = prompt("ingresa el nombre de la mascota que deseas eliminar:")

    // inicializo la variable mascotaEncontrada en falso, si mascotaEncontrada cambia a true es porque la mascota se encuentra en el array
    let mascotaEncontrada = false
    for (let i = 0; i < mascotas.length; i++) {
        if (mascotas[i].nombre == mascota) {
            mascotaEncontrada = true

            // se crea una variable que almacena la confirmacion de si se desea eliminar la mascota para no eliminar por error
            let confirmacion = confirm(`¿Está seguro que desea eliminar a ${mascota}?`)
            if (confirmacion) {
                mascotas.splice(i, 1)  // con el splice le pasamos la posicion donde se encuentra la mascota y eliminamos 1 atributo
                console.info("Mascota eliminada correctamente")
            }
        }
    }

    // si la mascota no se encuentra en el array, se le informa al usuario
    if (!mascotaEncontrada) {
        console.info("la mascota no existe, intenta con otra")
        eliminarMascota()
    }

}


//8. crear un menu que permita controlar cada una de las acciones
function menu() {
    // se crea un ciclo while que permite que el menu se repita hasta que el usuario ingrese 0 ó hasta que menu se vuelva flase
    let menu = true
    while (menu) {
        console.info(`Menu de opciones:
        1. Agregar nueva mascota
        2. Listar mascotas
        3. Ver dueños
        4. Buscar mascota por nombre
        5. Mostrar mascotas que pertenezcan al mismo dueño
        6. Actualizar informacion de mascota existente
        7. Eliminar una mascota
        0. salir`)
        let opcion = Number(prompt("Ingrese una opcion"))

        // se crea un switch que permite ejecutar las funciones segun la opcion que ingrese el usuario
        switch (opcion) {
            case 1:
                agregarMascota()
                break;
            case 2:
                listar()
                break;
            case 3:
                verDueños()
                break;
            case 4:
                buscarMascota()
                break;
            case 5:
                mascotasMismoDueño()
                break;
            case 6:
                actualizaInfo()
                break;
            case 7:
                eliminarMascota()
                break;
            case 0:
                console.info("Gracias por usar el sistema")
                menu = false
                break;

            default:
                console.info("Opcion no valida")
                break;
        }
    }
}

// se ejecuta la funcion menu() para ejecutar todo el programa
//menu() */

