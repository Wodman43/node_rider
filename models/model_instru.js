import bd from '../bases/mibase.js';
import { DataTypes } from 'sequelize';

const datosinstructor = bd.define('instructor',
{
  id_instru:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre_inst:{
    type: DataTypes.STRING,
    allowNull:false,
  }
},{
  tableName: 'instructor',
  timestamps: false,
});

export default datosinstructor;