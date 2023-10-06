import express  from 'express';
import {getAllestudiantes,getEstudiante,createEstu,updateEstu,deleteEstu} from '../controllers/control_estu.js';

 const miruta = express.Router();

miruta.get('/',getAllestudiantes);
miruta.get('/:id',getEstudiante);
miruta.post('/',createEstu);
miruta.put('/:id',updateEstu);
miruta.delete('/:id',deleteEstu);

export default miruta;