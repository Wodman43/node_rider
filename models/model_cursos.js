import bd from '../bases/mibase.js';
import { DataTypes } from 'sequelize';

 const datoscurso = bd.define('curso',{
    id_curso:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_curso:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },{
    tablename: 'curso',
    timestamps: false,
  });

  export default datoscurso;
