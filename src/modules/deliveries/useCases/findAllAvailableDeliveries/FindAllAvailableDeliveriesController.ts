import { Request, Response } from "express";

import { FindAllAvailableDeliveriesUseCase } from "./FindAllAvailableDeliveriesUseCase";

export class FindAllAvailableDeliveriesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const findAllAvailableDeliveriesUseCase = new FindAllAvailableDeliveriesUseCase()

    const deliveries = await findAllAvailableDeliveriesUseCase.execute()

    return res.json(deliveries)
  }
}