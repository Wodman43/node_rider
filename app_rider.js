import express  from "express";
import cors from "cors";
import  miruta  from "./routes/estu.routes.js";
import instrurut from "./routes/instru.routes.js";
import bd from "./bases/mibase.js";
import cursorut from "./routes/curso.routes.js";
import comperut from "./routes/compe.routes.js";
import notasrut from "./routes/notas.routes.js";
import resultrut from "./routes/result.routes.js";



const app = express();
app.use(cors());

app.use(express.json());


app.get('/', (req, res)=>{
    res.send('hoy casi pierdo clase de  node ');
})
 app.listen(8000,()=>{
    console.log('conected http://localhost:8000/');
 })

 app.use('/estudiantes',miruta);
 app.use('/instructor',instrurut);
 app.use('/curso',cursorut);
 app.use('/competencia',comperut);
 app.use('/notas',notasrut);
 app.use('/resultado',resultrut);

 try{
 await bd.authenticate();
 console.log('conexion exitosa');

 }catch(err){
    console.error(err);
 }

 app.post('/', (req, res)=>{
   
 })