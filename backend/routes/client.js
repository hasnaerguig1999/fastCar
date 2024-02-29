import { Router } from 'express';
import { getAllClients } from '../controllers/clientController';

const router = Router();

router.get('/', getAllClients);

export default router;