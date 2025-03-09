import { Request, Response } from 'express';
import UserService from '../services/UserService';
import { mapStatusHTTP } from '../utils';

export default class UserController {
    constructor(
        private userService: UserService = new UserService()
    ) { }

    public async login(req: Request, res: Response) {
        const { status, data } = await this.userService.login(req.body);
        console.log(status, data);
        return res.status(mapStatusHTTP(status)).json(data);
      }

    public async getRole(req: Request, res: Response) {
        const {status, data} = await this.userService.getRole(res.locals.email);
        return res.status(mapStatusHTTP(status)).json(data);
    }
};