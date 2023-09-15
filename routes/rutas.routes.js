import express  from 'express';
import {stockdatos}  from '../controllers/control.js';

export const miruta = express.Router();

miruta.get('/',stockdatos);
