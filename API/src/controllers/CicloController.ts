import { Request, Response } from "express";
import CicloSchema from "../models/CicloSchema";

class CicloController {
  listar(request: Request, response: Response) {
    response.json(CicloSchema.find());
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

  async cadastrar(request: Request, response: Response){
    //Lembrar dos erros da última aula
    const ciclo = request.body;
    console.log(ciclo);
    const cicloCadastrado = await CicloSchema.create(ciclo);
    response.json(cicloCadastrado);
  }
}

export { CicloController };
