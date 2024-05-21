import express from "express";
import {
  approveRoom,
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
} from "../controllers/room.controller.js";
import {
  verifyToken,
} from "../middleware/jwt.js";

const router = express.Router();

router.delete('/:id', deleteRoom);
router.get('/:id', verifyToken, getRoom);
router.get('/', getRooms);
router.put('/:id', updateRoom);
router.post('/:id/approve', approveRoom);
router.post('/create', createRoom);

export default router;
