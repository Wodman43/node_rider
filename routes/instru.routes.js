import express  from 'express';
import {getAllinstructores,getInstru,createInstru,updateInstru,deleteInstru} from '../controllers/control_instru.js'

const instrurut = express.Router();

instrurut.get('/',getAllinstructores);
instrurut.get('/:id',getInstru);
instrurut.post('/',createInstru);
instrurut.put('/:id',updateInstru);
instrurut.delete('/:id',deleteInstru);


export default instrurut;