import express  from 'express';
import {getAll,get,create,update,deletes} from '../controllers/control_compe.js'

const comperut = express.Router();

comperut.get('/',getAll);
comperut.get('/:id',get);
comperut.post('/',create);
comperut.put('/:id',update);
comperut.delete('/:id',deletes);


export default comperut;