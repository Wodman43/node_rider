import express  from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());
app.get('/', (req, res)=>{
    res.send('hoy casi pierdo clase de  node ');
})
 app.listen(8000,()=>{
    console.log('conected');
 })