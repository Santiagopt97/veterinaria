let mascotas = [
    {
        nombre: "fido",
        especie: "perro",
        raza: "labrador",
        imagen: "https://www.javer-keleb.com/wp-content/uploads/2023/11/photo_2023-05-31_21-03-51.jpg",
        fechaNacimiento: new Date("2018-05-15"), //utilizo el new Date() para que quede en formato fecha 
        edad: 6,
        peso: 15,
        estado: "estable",
        // Como los dueños tienen sus propios atributos lo utilice como un objeto dentro de otro objeto
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
        imagen: "https://mascooriente.co/wp-content/uploads/2021/08/siames.jpeg",
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
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD0b6y8D7eMG3A7mFGRz-DXJ4MHPcZ-VXiIBsGWIzibg&s",
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
        imagen: "https://www.purina.es/sites/default/files/styles/square_medium_440x440/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-09golden20retriever.jpg?itok=fIOsMe6_",
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
        imagen: "https://www.shutterstock.com/image-photo/beautiful-small-chihuahua-puppy-standing-600nw-2139376785.jpg",
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
        imagen: "https://www.zaunk.com/wp-content/uploads/2020/05/dalmata-scaled.jpg.webp",
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
        imagen: "https://estaticos-cdn.prensaiberica.es/clip/dd46d7f1-5e80-4a76-afd0-8a8aa38b3af9_16-9-aspect-ratio_default_0.jpg",
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
        especie: "perro",
        raza: "frenchie",
        imagen: "https://static.boredpanda.com/blog/wp-content/uploads/2018/04/fb_image_5ac22c29d166b__700.jpg",
        fechaNacimiento: "2016-11-12",
        edad: 8,
        peso: 25,
        estado: "estable",
        dueño: {
            nombreDueño: "violeta",
            documento: "3456789012",
            telefonoContacto: "555-345-6789",
            correo: "luisam@example.com",
        }
        
    },
    {
        nombre: "nina",
        especie: "gato",
        raza: "maine coon",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDosA80X69713a6IglqCLsGYzkbXCR4eQvtRBH8z5K1A&s",
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
        imagen: "https://picartpetcare.com/wp-content/uploads/2021/01/gato-abisinio.jpg",
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