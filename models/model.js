import bd from '../bases/mibase.js';
import { DataTypes } from 'sequelize';


    const datos = bd.define('aprendizs', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nombre: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        apellido:{
            type: DataTypes.STRING,
            allowNull: false,
        }
      });
    

export default datos;