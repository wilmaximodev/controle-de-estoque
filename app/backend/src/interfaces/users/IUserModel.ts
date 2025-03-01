import { IUser } from './IUser';

export default interface IUserModel {
  getUserById(id: number): Promise<IUser | null>
}