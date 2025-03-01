import Sequelize from 'sequelize';


const config: Sequelize.Options = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '123456',
  database: 'CONTROLE-DE-ESTOQUE',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  dialect:
    process.env.DB_DIALECT === 'mysql' ? 'mysql' : 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

module.exports = config;