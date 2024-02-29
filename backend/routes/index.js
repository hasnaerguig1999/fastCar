import { Router } from "express";
import authRouter from './auth';
import clientRouter from './client'
import carRouter from './car'

const router = Router();

router.use("/auth", authRouter);
router.use("/clients", clientRouter);
router.use("/cars", carRouter);

router.get("/", (req, res) => {
  res.send("Hello World!");
});

export default router;