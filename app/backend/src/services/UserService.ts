import bcrypt from 'bcryptjs';
import UserModel from '../models/UserModel';
import IUserModel from '../interfaces/users/IUserModel';
import { ServiceResponse } from '../types/ServiceResponse';
import { TokenType } from '../types/Token';
import ILogin from '../interfaces/users/ILogin';
import Token from '../auth/jwt';


export default class UserService {

    constructor(
        private userModel: IUserModel = new UserModel()
    ) { }

    public async login(Login: ILogin): Promise<ServiceResponse<TokenType>> {
      const user = await this.userModel.getUser(Login.email);
      if (!user || !bcrypt.compareSync(Login.password, user.password)) {
        return { status: 'unauthorized', data: { message: 'Invalid email or password' } };
      }
      const token = new Token().generate({ id: user.id, email: user.email });

      return { status: 'successful', data: { token } };
    }

    public async getRole(email: string): Promise<ServiceResponse<object>> {
      const role = await this.userModel.getRole(email);
      if (!role) {
        return { status: 'invalidData', data: { message: 'User not found' } };
      }
      return { status: 'successful', data: role };
    }
}