import mongoose from 'mongoose';
import config from './config';

mongoose.connect(config.URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( db => console.log('Database is conected'))
.catch(err => console.log(err, console.log('Database is not conected')));