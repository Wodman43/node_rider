import datosEstudiates from "../models/model_estu.js";

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

export const getAllestudiantes = async (req,res)=>{
    try{
        const estantes = await datosEstudiates.findAll();
        res.json(estantes);
        console.log(estantes);
        
    }catch(error){
        res.json({mesaage: error.mesaage})
    }
}

export const getEstudiante = async (req, res)=>{
    try{
        const Estu = await datosEstudiates.findAll({
            where: {id_estudiante: req.params.id}
        });
        res.json(Estu[0]);
    }catch(err){
        res.json({mesaage: err.mesaage})
    }
}

export const createEstu = async (req, res)=>{
    try{
        await datosEstudiates.create(req.body);
        res.json({
            "message":"registro creado correctamente"
        })
    }catch(err){
        res.json({message:err.message})
    }
}

export const updateEstu = async (req, res)=>{
    try{
        await datosEstudiates.update(req.body,{
            where:{id_estudiante:req.params.id}
        })
        res.json({
            "message":"registro actualizado correctamente"
        })
    }catch(err){
        res.json({message:err.message})
    }
}
export const deleteEstu = async (req, res)=>{
    try{
        await datosEstudiates.destroy({
            where:{id_estudiante:req.params.id}
        })
        res.json({
            "message":"registro Eliminado correctamente"
        })
    }catch(err){
        res.json({message:err.message})
    }
}