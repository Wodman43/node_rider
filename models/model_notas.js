import bd from '../bases/mibase.js';
import { DataTypes } from 'sequelize';

const datosnotas = bd.define('notas',{
    id_notas:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nota1:{
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    nota2:{
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    nota3:{
      type: DataTypes.FLOAT,
      allowNull: false,
    }
  },{
    tableName: 'notas',
    timestamps: false,
  });

  export default datosnotas;