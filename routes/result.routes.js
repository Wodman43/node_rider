import express  from 'express';
import {getAll,get,create,update,deletes} from '../controllers/control_resultado.js'

const resultrut = express.Router();

resultrut.get('/',getAll);
resultrut.get('/:id',get);
resultrut.post('/',create);
resultrut.put('/:id',update);
resultrut.delete('/:id',deletes);


export default resultrut;