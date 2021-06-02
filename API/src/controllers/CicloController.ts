import { Request, Response } from "express";
import CicloSchema from "../models/CicloSchema";

class CicloController {
  async listar(request: Request, response: Response) {
    try {
      const ciclos = await CicloSchema.find();
      // response.status(200).json({
      //   data: ciclos,
      //   error: false,
      //   msg: "Lista de ciclos de pagamento atualizada!",
      // });
      response.status(200).json(ciclos);
    } catch (error) {
      response.status(400).json({
        data: error,
        error: true,
        msg: "Não foi possível listar os ciclos de pagamento",
      });
    }
  }

  async listarPorId(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const ciclo = await CicloSchema.findOne({ _id: id });
      // console.log(await CicloSchema.exists({ _id: id }));
      // console.log(await CicloSchema.find({ _id: id }).countDocuments());

      if (ciclo != null) {
        response.status(200).json({ data: ciclo, error: false, msg: "Ciclo encontrado!" });
      } else {
        response.status(404).json({ data: ciclo, error: false, msg: "Ciclo não encontrado!" });
      }
    } catch (error) {
      response.status(400).json({ data: error, error: true, msg: "Esse não é um formato válido para o ID!" });
    }
  }

  async cadastrar(request: Request, response: Response) {
    try {
      const novoCiclo = await CicloSchema.create(request.body);
      response.status(201).json(novoCiclo);
    } catch (error) {
      response.status(400).json({
        data: error,
        error: true,
        msg: "Não foi possível adicionar o ciclo",
      });
    }
  }
}

export { CicloController };
