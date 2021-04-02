import { Request, Response } from "express";

class CicloController {
  listar(request: Request, response: Response) {
    response.send("Hello World com ts-node-dev mais uma vez!");
  }

  listarPorId(request: Request, response: Response){
    const { rg, telefone } = request.params;
    const objeto = {
      nome: "Diogo Steinke Deconto",
      cpf: "111.111.111-11",
      idade: 31,
      rg,
      telefone,
    };
    response.json(objeto);
  }

  cadastrar(request: Request, response: Response){
    const pessoa = request.body;
    console.log(pessoa);
    const objeto = {
      msg: "Cliente cadastrado com sucesso!",
      pessoa,
    };
    response.json(objeto);
  }
}

export { CicloController };
