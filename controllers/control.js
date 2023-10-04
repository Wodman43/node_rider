import datos from "../models/model.js";

export const stockdatos = async (req,res)=>{
    try{
        const apdices = await datos.findAll();
        res.json(apdices);
        console.log(apdices);
        
    }catch(error){
        res.json({mesaage: error.mesaage})
    }
}

export const getApz = async (req, res)=>{
    try{
        const Apdz = await datos.findAll({
            where: {id: req.params.id}
        });
        res.json(Apdz[0]);
    }catch(err){
        res.json({mesaage: err.mesaage})
    }
}

export const createApdz = async (req, res)=>{
    try{
        await datos.create(req.body);
        res.json({
            "message":"registro creado correctamente"
        })
    }catch(err){
        res.json({message:err.message})
    }
}

export const updateApdz = async (req, res)=>{
    try{
        await datos.update(req.body,{
            where:{id:req.params.id}
        })
        res.json({
            "message":"registro actualizado correctamente"
        })
    }catch(err){
        res.json({message:err.message})
    }
}

export const deleteApdz = async (req, res)=>{
    try{
        await datos.destroy({
            where:{id:req.params.id}
        })
        res.json({
            "message":"registro Eliminado correctamente"
        })
    }catch(err){
        res.json({message:err.message})
    }
}