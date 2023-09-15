import bd from '../bases/mibase.js';
import { DataTypes } from 'sequelize';

const datos = bd.define('aprendiz',{
    id:{ type: DataTypes.STRING},
    nombre:{type: DataTypes.STRING},
    apellido:{type: DataTypes.STRING},
});

export default datos;