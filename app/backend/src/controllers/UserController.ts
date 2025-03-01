import { Request, Response } from 'express';
import UserService from '../services/UserService';

export default class UserController {
    constructor(
        private userService: UserService = new UserService()
    ) { }

    public async getUser(req: Request, res: Response) {
        const user = await this.userService.getUser(+req.params.id);
        console.log(user);
        return res.json(user);
    }
};