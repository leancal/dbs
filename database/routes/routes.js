import express from 'express';
import { createAudio, deleteAudio, getAllAudio, getAudio, updateAudio } from '../controllers/AudioController.js';

const router = express.Router();

router.get('/', getAllAudio);
router.get('/:id', getAudio);
router.post('/', createAudio);
router.put('/:id', updateAudio);
router.delete('/:id', deleteAudio);


export default router;