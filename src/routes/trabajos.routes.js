import {Router} from 'express';
import * as controller from '../controllers/trabajo.controller';
const route = Router();

route.post('/', controller.createTrabajo);
route.get('/:seccion', controller.getTrabajos);
route.delete('/:id', controller.createTrabajo);

export default route;