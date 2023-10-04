import express  from 'express';
 import {stockdatos,getApz,createApdz,updateApdz,deleteApdz}  from '../controllers/control.js';

 const miruta = express.Router();

miruta.get('/',stockdatos);
miruta.get('/:id',getApz);
miruta.post('/',createApdz);
miruta.put('/:id',updateApdz);
miruta.delete('/:id',deleteApdz);

export default miruta;