import express  from 'express';
import {getAll,get,create,update,deletes} from '../controllers/control_cursos.js'

const cursorut = express.Router();

cursorut.get('/',getAll);
cursorut.get('/:id',get);
cursorut.post('/',create);
cursorut.put('/:id',update);
cursorut.delete('/:id',deletes);


export default cursorut;