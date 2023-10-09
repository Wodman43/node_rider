import datoscompe from "../models/model_compe.js";

export const getAll = async (req,res)=>{
    try{
        const traer = await datoscompe.findAll();
        res.json(traer);
        console.log(traer);
        
    }catch(error){
        res.json({mesaage: error.mesaage})
    }
}

export const get = async (req, res)=>{
    try{
        const traer1 = await datoscompe.findAll({
            where: {id_competencia: req.params.id}
        });
        res.json(traer1[0]);
    }catch(err){
        res.json({mesaage: err.mesaage})
    }
}

export const create = async (req, res)=>{
    try{
        await datoscompe.create(req.body);
        res.json({
            "message":"registro creado correctamente"
        })
    }catch(err){
        res.json({message:err.message})
    }
}

export const update = async (req, res)=>{
    try{
        await datoscompe.update(req.body,{
            where:{id_competencia:req.params.id}
        })
        res.json({
            "message":"registro actualizado correctamente"
        })
    }catch(err){
        res.json({message:err.message})
    }
}
export const deletes = async (req, res)=>{
    try{
        await datoscompe.destroy({
            where:{id_competencia:req.params.id}
        })
        res.json({
            "message":"registro Eliminado correctamente"
        })
    }catch(err){
        res.json({message:err.message})
    }
}