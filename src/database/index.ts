import SQLConfig from '../config/database';

import Consulta from '../app/models/Consulta';

// import mongoose from 'mongoose';

const Sequelize = require('sequelize');

const models = [Consulta];

class Database {
  connection;

  NOSQLConnection;

  constructor() {
    this.SQL();
  }

  SQL() {
    this.connection = new Sequelize(SQLConfig);

    models.map(model => model.init(this.connection));
    models.map(
      model => model.associate && model.associate(this.connection.models)
    );
  }
}

export default new Database();
