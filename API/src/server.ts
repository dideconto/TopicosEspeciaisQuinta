import express from "express";
import {Request, Response} from "express";

const app = express();

console.clear();

//Métodos HTTP -> GET, POST e etc...
// GET -> Solitar recursos/dados do servidor                                                          
// POST -> Enviar recursos/dados/entidades para o servidor

app.get("/", (request: Request, response: Response)  => {
    response.send("Hello World com ts-node-dev mais uma vez!");
});

app.listen(3000, () => {
   console.log("O servidor está rodando...") ;
});