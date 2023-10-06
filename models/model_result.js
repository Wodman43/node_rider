import bd from '../bases/mibase.js';
import { DataTypes } from 'sequelize';

const datosresultado = bd.define('resultados',{
    id_resultados:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom_result:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    id_nota:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    compe_id_compe:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },{
    tablename: 'resultados',
    timestamps: false,
  });


  export default datosresultado;