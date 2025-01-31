import express from 'express';
import { updateProfile, getListing } from '../controllers/user.controller.js';

const router = express.Router();

router.patch('/profile', updateProfile);
router.get('/listing', getListing);


export default router;
