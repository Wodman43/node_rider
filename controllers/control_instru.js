import datosinstructor from '../models/model_instru.js'

export const getAllinstructores = async (req,res)=>{
    try{
        const instru = await datosinstructor.findAll();
        res.json(instru);
        console.log(instru);
        
    }catch(error){
        res.json({mesaage: error.mesaage})
    }
}

export const getInstru = async (req, res)=>{
    try{
        const inst = await datosinstructor.findAll({
            where: {id_instru: req.params.id}
        });
        res.json(inst[0]);
    }catch(err){
        res.json({mesaage: err.mesaage})
    }
}

export const createInstru = async (req, res)=>{
    try{
        await datosinstructor.create(req.body);
        res.json({
            "message":"registro creado correctamente"
        })
    }catch(err){
        res.json({message:err.message})
    }
}

export const updateInstru = async (req, res)=>{
    try{
        await datosinstructor.update(req.body,{
            where:{id_instru:req.params.id}
        })
        res.json({
            "message":"registro actualizado correctamente"
        })
    }catch(err){
        res.json({message:err.message})
    }
}
export const deleteInstru = async (req, res)=>{
    try{
        await datosinstructor.destroy({
            where:{id_instru:req.params.id}
        })
        res.json({
            "message":"registro Eliminado correctamente"
        })
    }catch(err){
        res.json({message:err.message})
    }
}