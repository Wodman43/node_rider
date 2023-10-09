import datosresultado from '../models/model_result.js';

export const getAll = async (req,res)=>{
    try{
        const traer = await datosresultado.findAll();
        res.json(traer);
        console.log(traer);
        
    }catch(error){
        res.json({mesaage: error.mesaage})
    }
}

export const get = async (req, res)=>{
    try{
        const traer1 = await datosresultado.findAll({
            where: {id_resultado: req.params.id}
        });
        res.json(traer1[0]);
    }catch(err){
        res.json({mesaage: err.mesaage})
    }
}

export const create = async (req, res)=>{
    try{
        await datosresultado.create(req.body);
        res.json({
            "message":"registro creado correctamente"
        })
    }catch(err){
        res.json({message:err.message})
    }
}

export const update = async (req, res)=>{
    try{
        await datosresultado.update(req.body,{
            where:{id_resultado:req.params.id}
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
        await datosresultado.destroy({
            where:{id_resultado:req.params.id}
        })
        res.json({
            "message":"registro Eliminado correctamente"
        })
    }catch(err){
        res.json({message:err.message})
    }
}