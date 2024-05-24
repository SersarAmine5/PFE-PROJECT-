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
import { verifyToken, checkIfUserIsExpert } from "../middleware/jwt.js";

const router = express.Router();

router.delete("/topics/:topicId/:roomId",deleteRoom);
router.get("/:id", verifyToken, getRoom);
router.get("/:id/messages", getRoomMessages);
router.get("/", getRooms);

router.post("/topics/:topicId/new", createRoom);
router.post("/:id/approve", approveRoom);

router.put("/:id", updateRoom);

export default router;
