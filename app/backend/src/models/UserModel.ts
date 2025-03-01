import { IUser } from '../interfaces/users/IUser';
import IUserModel from '../interfaces/users/IUserModel';
import SequelizeUser from '../database/models/SequelizeUser';

export default class UserModel implements IUserModel {
  private model = SequelizeUser;

  async getUserById(id: number): Promise<IUser | null> {
    const user = await this.model.findByPk(id);
    return user;
  }
}