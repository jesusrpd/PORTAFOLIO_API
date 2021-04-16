import Trabajo from '../models/Trabajo';

export const createTrabajo = async (req, res)=>{
    const {nombre, urlImg, link, seccion} = req.body; 

    const newTrabajo = new Trabajo({
        nombre, urlImg, link, seccion
    });
    await newTrabajo.save();
    res.status(200).json('Trabajo creado');
};

export const getTrabajos = async (req, res)=>{
    const trabajos = await Trabajo.find({seccion: req.params.seccion});
    res.status(200).json(trabajos);
};

export const deleteTrabajo = async(req, res)=>{
    await Trabajo.findOneAndRemove({_id: req.params.id});
    res.json('Trabajo Borrado');
}