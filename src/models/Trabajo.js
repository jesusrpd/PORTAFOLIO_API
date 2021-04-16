import {Schema, model} from 'mongoose';

const trabajoSchema = new Schema({
    "nombre": String,
    "urlImg": String,
    "link": String,
    "seccion": String
});

export default model('trabajo', trabajoSchema);