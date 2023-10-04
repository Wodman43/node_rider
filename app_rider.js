import express  from "express";
import cors from "cors";
import  miruta  from "./routes/rutas.routes.js";
import bd from "./bases/mibase.js";




const app = express();
app.use(cors());

app.use(express.json());
app.get('/', (req, res)=>{
    res.send('hoy casi pierdo clase de  node ');
})
 app.listen(8000,()=>{
    console.log('conected http://localhost:8000/');
 })

 app.use('/aprendices',miruta);

 try{

 await bd.authenticate();
 console.log('conexion exitosa');
 }catch(err){
    console.error(err);
 }