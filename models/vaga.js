import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Vaga = sequelize.define('Vaga', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  titulo: {
    type: DataTypes.STRING
  },
  descricao: {
    type: DataTypes.TEXT
  },
  cargo: {
    type: DataTypes.STRING
  },
  cidade: {
    type: DataTypes.STRING
  },
  salario: {
    type: DataTypes.DECIMAL
  },
});

export default Vaga;
