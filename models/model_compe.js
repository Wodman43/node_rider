import bd from '../bases/mibase.js';
import { DataTypes } from 'sequelize';



const datoscompe = bd.define('competencia',{
    id_competencia:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom_compe:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    curso_id_curso:{
      type: DataTypes.INTEGER,
      allowNull:false,
    }
  },{
    tableName: 'competencia',
    timestamps: false,
  });


  export default datoscompe;