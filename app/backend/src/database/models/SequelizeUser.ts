import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
  } from 'sequelize';
  import db from '.';
  // import OtherModel from './OtherModel';
  
  export default class SequelizeUser extends Model<InferAttributes<SequelizeUser>,
  InferCreationAttributes<SequelizeUser>> {
    declare id: CreationOptional<number>;
    declare username: string;
    declare password: string;
    declare email: string;
    declare role: string;
  }
  
  SequelizeUser.init({
    id: {
      primaryKey: true,
      type: DataTypes.NUMBER,
      allowNull: false,
      autoIncrement: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize: db,
    timestamps: false,
    tableName: 'users',
  });