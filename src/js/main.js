let fechaActual = new Date()
const mascotas = [
    {
        nombre: "fido",
        especie: "perro",
        raza: "labrador",
        fechaNacimiento: new Date("2018-05-15"),
        edad: 6,
        peso: 15,
        estado: "estable",
        dueño: {
            nombreDueño: "juan",
            documento: "1234567890",
            telefonoContacto: "555-123-4567",
            correo: "juanperez@example.com",
        }
    },
    {
        nombre: "luna",
        especie: "gato",
        raza: "siamés",
        fechaNacimiento: "2019-03-10",
        edad: 5,
        peso: 5,
        estado: "estable",
        dueño: {
            nombreDueño: "maría",
            documento: "0987654321",
            telefonoContacto: "555-987-6543",
            correo: "mariag@example.com",
        }

    },
    {
        nombre: "rocky",
        especie: "perro",
        raza: "bulldog",
        fechaNacimiento: "2017-08-25",
        edad: 7,
        peso: 20,
        estado: "estable",
        dueño: {
            nombreDueño: "carlos",
            documento: "5678901234",
            telefonoContacto: "555-567-8901",
            correo: "carlosm@example.com",
        }
        
    },
    {
        nombre: "max",
        especie: "perro",
        raza: "golden Retriever",
        fechaNacimiento: "2018-07-20",
        edad: 6,
        peso: 30,
        estado: "estable",
        dueño: {
            nombreDueño: "pedro",
            documento: "5678901234",
            telefonoContacto: "555-123-4567",
            correo: "pedror@example.com",
        }
        
    },
    {
        nombre: "milo",
        especie: "perro",
        raza: "chihuahua",
        fechaNacimiento: "2020-02-15",
        edad: 4,
        peso: 3,
        estado: "estable",
        dueño: {
            nombreDueño: "ana",
            documento: "1234567890",
            telefonoContacto: "555-678-9012",
            correo: "anal@example.com",
        }
        
    },
    {
        nombre: "zeuz",
        especie: "perro",
        raza: "dalmata",
        fechaNacimiento: "2023-04-20",
        edad: 1,
        peso: 28,
        estado: "estable",
        dueño: {
            nombreDueño: "david",
            documento: "6789012345",
            telefonoContacto: "555-789-0123",
            correo: "david@example.com",
        }
        
    },
    {
        nombre: "simba",
        especie: "gato",
        raza: "persa",
        fechaNacimiento: "2017-05-01",
        edad: 7,
        peso: 10,
        estado: "estable",
        dueño: {
            nombreDueño: "laura",
            documento: "9012345678",
            telefonoContacto: "555-234-5678",
            correo: "lauraf@example.com",
        }
        
    },
    {
        nombre: "pistacho",
        especie: "frenchie",
        raza: "labrador",
        fechaNacimiento: "2016-11-12",
        edad: 8,
        peso: 25,
        estado: "estable",
        dueño: {
            nombreDueño: "luisa",
            documento: "3456789012",
            telefonoContacto: "555-345-6789",
            correo: "luisam@example.com",
        }
        
    },
    {
        nombre: "nina",
        especie: "gato",
        raza: "maine coon",
        fechaNacimiento: "2019-09-30",
        edad: 5,
        peso: 8,
        estado: "estable",
        dueño: {
            nombreDueño: "david",
            documento: "6789012345",
            telefonoContacto: "555-789-0123",
            correo: "david@example.com",
        }
        
    },
    {
        nombre: "mia",
        especie: "gato",
        raza: "abisinio",
        fechaNacimiento: "2017-06-20",
        edad: 7,
        peso: 12,
        estado: "critico",
        dueño: {
            nombreDueño: "david",
            documento: "6789012345",
            telefonoContacto: "555-789-0123",
            correo: "david@example.com",
        }
        
    }
]

//1. registrar una nueva mascota
function agregarMascota() {
    const nuevaMascota = {

    }
    let fechaNacimiento = new Date(prompt("Ingrese la fecha de nacimiento de la mascota"))
    nuevaMascota.nombre = prompt("Ingrese el nombre de la mascota")
    nuevaMascota.especie = prompt("Ingrese la especie de la mascota")
    nuevaMascota.raza = prompt("Ingrese la raza de la mascota")
    nuevaMascota.fechaNacimiento = fechaNacimiento
    nuevaMascota.edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear()
    nuevaMascota.peso = Number(prompt("Ingrese el peso de la mascota"))
    nuevaMascota.estado = prompt("Ingrese el estado de la mascota")
    nuevaMascota.dueño = {}
    nuevaMascota.dueño.nombreDueño = prompt("Ingrese el nombre del propietario de la mascota")
    nuevaMascota.dueño.documento = prompt("Ingrese el documento del dueño de la mascota")
    nuevaMascota.dueño.telefonoContacto = Number(prompt("Ingrese el telefono de contacto del dueño de la mascota"))
    nuevaMascota.dueño.correo = prompt("Ingrese el correo del dueño de la mascota")
    mascotas.push(nuevaMascota)
    console.info(nuevaMascota)
    console.info("Mascota agregada con exito")
}

//2. Listar mascotas
function listar() {
    for (let i = 0; i < mascotas.length; i++) {
        console.info(mascotas[i])
    }
}

//3. Ver dueños

function verDueños() {
    for (let i = 0; i < mascotas.length; i++) {
        console.info(mascotas[i].dueño)
    }

}

//4. Buscar mascota por nombre


function buscarMascota(){
    let mascota = prompt("ingresa el nombre de la mascota que deseas buscar:")
    for (let i = 0; i < mascotas.length; i++) {
        if (mascotas[i].nombre == mascota) {
            console.info(mascotas[i])
        }        
    }
}

//5. Mostrar mascotas que pertenezcan al mismo dueño

function mascotasMismoDueño() {
    let dueño = prompt("ingresa el nombre del dueño de las mascotas que deseas ver:")
    for (let i = 0; i < mascotas.length; i++) {
        if(mascotas[i].dueño.nombreDueño === dueño){
            console.info(mascotas[i].nombre)
        }
        
    }
}


//6. Actualizar informacion de mascota existente

function actualizaInfo() {
    let mascota = prompt("ingresa el nombre de la mascota que deseas actualizar:")
    for (let i = 0; i < mascotas.length; i++){
        if (mascotas[i].nombre == mascota) {
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
        }else{
            console.info("la mascota no existe")
        }
    
    }
}

//7. Eliminar una mascota

function eliminarMascota() {
    let mascota = prompt("ingresa el nombre de la mascota que deseas eliminar:")
    for (let i = 0; i < mascotas.length; i++){
        if (mascotas[i].nombre == mascota) {
            console.info(mascotas[i])
            mascotas.splice(i, 1)
            console.info("Mascota eliminada")
        }
    }
    
}

//8. crear un menu que permita controlar cada una de las acciones
function menu() {
    let menu = true
    while (menu == true) {
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
menu()

