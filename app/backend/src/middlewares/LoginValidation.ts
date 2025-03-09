import { Request, Response, NextFunction } from 'express';
import { mapStatusHTTP, validateEmail } from '../utils';

export default class LoginValidation {
  static inputLogin(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(mapStatusHTTP('invalidData'))
        .json({ message: 'All fields must be filled' });
      return;
    }
    
    if (!validateEmail(email) || password.length < 6) {
    res.status(mapStatusHTTP('unauthorized'))
        .json({ message: 'Invalid email or password' });
    return;
    }

    return next();
  }
}