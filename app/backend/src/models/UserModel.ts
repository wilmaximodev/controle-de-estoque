import { IUser } from '../interfaces/users';
import IUserModel from '../interfaces/users/IUserModel';
import SequelizeUser from '../database/models/SequelizeUser';

export default class UserModel implements IUserModel {
  private model = SequelizeUser;

  async getUser(email: string): Promise<IUser | null> {
    const user = await this.model.findOne({ where: { email } });
    return user;
  }

  async getRole(email: string): Promise<object> {
    const user = await this.model.findOne({ where: { email } });
    return { role: user?.role };
  }
}