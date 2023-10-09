import datoscursoints from "../models/model_cursoinst";
import datoscursoints from "../models/model_cursoinst";
export const getAll = async (req,res)=>{
    try{
        const traer = await datoscursoints.findAll();
        res.json(traer);
        console.log(traer);
        
    }catch(error){
        res.json({mesaage: error.mesaage})
    }
}

export const get = async (req, res)=>{
    try{
        const traer1 = await datoscursoints.findAll({
            where: {id_curso: req.params.id}
        });
        res.json(traer1[0]);
    }catch(err){
        res.json({mesaage: err.mesaage})
    }
}

export const create = async (req, res)=>{
    try{
        await datoscursoints.create(req.body);
        res.json({
            "message":"registro creado correctamente"
        })
    }catch(err){
        res.json({message:err.message})
    }
}

export const update = async (req, res)=>{
    try{
        await datoscursoints.update(req.body,{
            where:{id_curso:req.params.id}
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
        await datoscursoints.destroy({
            where:{id_curso:req.params.id}
        })
        res.json({
            "message":"registro Eliminado correctamente"
        })
    }catch(err){
        res.json({message:err.message})
    }
}