import { Router } from 'express';
import { getAllSettings } from '../controllers/settingController';

const router = Router();

router.get('/', getAllSettings);

export default router;