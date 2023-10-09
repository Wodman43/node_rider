import bd from '../bases/mibase.js';
import { DataTypes } from 'sequelize';
// import datoscurso from '../models/model_cursos.js'


     const datosEstudiates = bd.define('estudiantes', {
        id_estudiante:{
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nombre:{
          type: DataTypes.STRING,
          allowNull: false,
        },
        apellido:{
          type: DataTypes.STRING,
          allowNull: false,
      },
      password:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      email:{
        type: DataTypes.STRING,
        allowNull:false,
      },
      curso_id_curso:{
        type: DataTypes.INTEGER,
        allowNull: false,
      }
      });

      // datoscurso.hasMany(datosEstudiates, { foreignKey: 'curso_id_curso' });
      // datosEstudiates.belongsTo(datoscurso, { foreignKey: 'curso_id_curso' });

export default datosEstudiates;