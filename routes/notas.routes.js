import express  from 'express';
import {getAll,get,create,update,deletes} from '../controllers/control_notas.js'

const notasrut = express.Router();

notasrut.get('/',getAll);
notasrut.get('/:id',get);
notasrut.post('/',create);
notasrut.put('/:id',update);
notasrut.delete('/:id',deletes);


export default notasrut;