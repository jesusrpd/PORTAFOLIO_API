import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import trabajosRoutes from './routes/trabajos.routes';
const app = express();

//Middlewares de configuración
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan("dev"));

//Archivos estaticos
app.use(express.static('build'));

//Rutas
app.use('/api/trabajos', trabajosRoutes);

export default app;