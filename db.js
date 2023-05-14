import { MongoClient } from "mongodb"

const client = new MongoClient("mongodb://127.0.0.1:27017")
const db = client.db("AH20231CP1")

client.connect()
    .then(function () {
        console.log("Conectado")
        const collectionProjects = db.collection("Projects");
        const collectionClients = db.collection("Cliente");

        // db projects
        collectionProjects.insertOne(
          {
            name: "Intercagram",
            description: "Una app para facilitar el intercamibio de fotos con amigos!",
            link: "http://miweb.com/proyecto",
            img: "https://fastly.picsum.photos/id/456/200/300.jpg?grayscale&hmac=e9X5NupMQ8XpBq1T19WqQhsfD0KdB3qQlUjr4eC6sRQ",
            technologies: ["Kotlin", "CSS", "VITE"],
            section: "mobile",
            cliente: "Brian"
          })
          collectionProjects.insertOne(
          {
            name: "Muestra de Campaña",
            description: "Landing Page para mostrar una campaña de google ADS",
            link: "http://miweb.com/proyecto",
            img: "https://fastly.picsum.photos/id/845/200/300.jpg?blur=5&hmac=f_PGR7PWTVlW4GEhlfPw14tkaQQ2jWLJ7Fpn6D2EdLQ",
            technologies: ["REACT", "CSS", "MONGODB"],
            section: "landing page",
            cliente: "Brian"
          })
          collectionProjects.insertOne(
          {
            name: "Flores APP",
            description: "Una Web App que nos brinda toda la informacion con respecto a flores",
            link: "http://miweb.com/proyecto",
            img: "https://fastly.picsum.photos/id/1056/200/300.webp?hmac=6YzWP_h_csxvfx5PDwXUxo2X_srm59H174vlTKcfHTA",
            technologies: ["LARAVEL", "CSS", "MySQL"],
            section: "web app",
            cliente: "Laureano"
          })
          collectionProjects.insertOne(
          {
            name: "Muebleria SHOP",
            description: "Una e-Commerce de una venta de muebles, donde prodras ver muchos productos, filtros entre otras cosas",
            link: "http://miweb.com/proyecto",
            img: "https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g",
            technologies: ["ANGULAR", "BOOTSTRAP", "FIRESTORE"],
            section: "e-commerce",
            cliente: "Laureano"
          })
          collectionProjects.insertOne(
          {
            name: "Steanx Games",
            description: "Un videojuego que te volvera adicto en cuanto lo toques",
            link: "http://miweb.com/proyecto",
            img: "https://fastly.picsum.photos/id/40/4106/2806.jpg?hmac=MY3ra98ut044LaWPEKwZowgydHZ_rZZUuOHrc3mL5mI",
            technologies: ["UNITY", "UNREAL ENGINE", "CSS"],
            section: "games",
            cliente: "Laureano"
          })

        //   db clients
        collectionClients.insertOne(
            {
                nombre: "Laureano",
                foto: "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
                descripcion: "Un cliente que es estudiante de la Escuela Da Vinci y tiene intenciones de aprobar la materia Aplicaciones Hibridas",
                proyectos: ["Muebleria SHOP", "Steanx Games", "Flores APP"]
            })
            collectionClients.insertOne(
            {
                nombre: "Brian",
                foto: "https://fastly.picsum.photos/id/870/200/300.jpg?blur=2&grayscale&hmac=ujRymp644uYVjdKJM7kyLDSsrqNSMVRPnGU99cKl6Vs",
                descripcion: "Cliente frecuente que cuenta con dos proyectos tambien es Profe Aplicaciones Hibridas",
                proyectos: ["Intercagram", "Muestra de Campaña"]
            })

    })
    .catch(function () {
        console.log("Conexión fallida")
    })