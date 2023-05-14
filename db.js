import { MongoClient } from "mongodb"

const client = new MongoClient("mongodb://127.0.0.1:27017")
const db = client.db("AH20231CP1")

client.connect()
    .then(function () {
        console.log("Conectado")
    })
    .catch(function () {
        console.log("Conexión fallida")
    })