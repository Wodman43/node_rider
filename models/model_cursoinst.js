import bd from '../bases/mibase.js';
import { DataTypes } from 'sequelize';


const datoscursoints = bd.define('curso_instrucor',{
    curso_id_curso:{
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    instru_id_instru:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },{
    tableName: 'curso_instrucor',
    timestamps: false,
  });

  export default datoscursoints;