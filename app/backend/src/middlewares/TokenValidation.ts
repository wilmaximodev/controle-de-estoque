import { NextFunction, Request, Response } from 'express';
import Token from '../auth/jwt';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class TokenValidation {
  static verifyToken(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) {
      res.status(mapStatusHTTP('unauthorized'))
        .json({ message: 'Token not found' });
      return;
    }

    try { 
      const user = new Token().decode(authorization);
      res.locals = user;
      return next();
    } catch (e) {
      res.status(mapStatusHTTP('unauthorized'))
        .json({ message: 'Token must be a valid token' });
      return;
    }
  }
}
