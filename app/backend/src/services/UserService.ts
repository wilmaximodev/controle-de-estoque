import UserModel from '../models/UserModel';
import IUserModel from '../interfaces/users/IUserModel';

export default class UserService {

    constructor(
        private userModel: IUserModel = new UserModel()
    ) { }

  async getUser(id: number) {
    const user = await this.userModel.getUserById(id);
    return user;
  }
}