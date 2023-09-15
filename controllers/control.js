import datos from "../models/model";

export const stockdatos = async (req,res)=>{
    try{
        const apdices = await datos.findAll();
        res.Json(apdices);
    }catch{
        res.Json({mesaage: error.mesaage})
        console.error(err)
    }
}