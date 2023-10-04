import datos from "../models/model.js";

export const stockdatos = async (req,res)=>{
    try{
        const apdices = await datos.findAll();
        res.Json(apdices);
    }catch{
        res.Json({mesaage: error.mesaage})
    }
}