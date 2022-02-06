import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticateClient(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization

  if (!authHeader)
    return res.status(401).json({
      message: "Token missing!"
    })

  const [, token] = authHeader.split(" ")

  try {
    const { sub } = verify(token, "cd768a634664879496f5d2d4794bc346") as IPayload

    req.id_client = sub
    return next()
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token!"
    })
  }


}