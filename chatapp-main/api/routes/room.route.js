import express from "express";
import {
  approveRoom,
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  getRoomMessages,
} from "../controllers/room.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.delete("/:id", deleteRoom);
router.get("/:id", verifyToken, getRoom);
router.get("/:id/messages", getRoomMessages);
router.get("/", getRooms);

router.post("/create", createRoom);
router.post("/:id/approve", approveRoom);

router.put("/:id", updateRoom);

export default router;
