import config from './config';
import './database';
import app from './app';

//Inicializamos el servidor
(async ()=>{
    app.listen(config.PORT);
    console.log(`Server on port ${config.PORT}`);
})();