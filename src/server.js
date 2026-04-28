const express = require("express")

const app = express()

function callbackDaRaiz( request, response ) {
    response.send("VAI CORINTHIANS!!!! 🦅")
}
function callbackDaRaizUsuarios(request, response) {
    const listaUsuarios = [  
         { 
        id: 1, 
        name: "kawan"
    } 
]

response.json(listaUsuarios)
}

app.get("/", callbackDaRaiz)


app.get("/users", callbackDaRaizUsuarios)

app.listen(3000, () => {
    console.log("API rodando em http://localhost:3000")
})