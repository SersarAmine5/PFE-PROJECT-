import express from "express";
import {
<<<<<<< Updated upstream
  approveRoom,
  requestCreateRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
} from "../controllers/room.controller.js";
=======
  // approveRoom,
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  // updateRoom,
  getRoomMessages,
} from "../controllers/room.controller.js";
import { verifyToken, checkIfUserIsExpert } from "../middleware/jwt.js";
>>>>>>> Stashed changes

import {
  checkIfUserIsAdmin,
  checkIfUserIsExpert,
  checkIfUserIsModerator,
  verifyToken,
} from "../middleware/jwt.js";

<<<<<<< Updated upstream

const router = express.Router()

router.get("/rooms", verifyToken, getRooms);
router.get("/rooms/:id", verifyToken, getRoom);
router.post("/rooms", verifyToken, requestCreateRoom);
router.patch("/rooms/:id", verifyToken, updateRoom);
router.delete("/rooms/:id", verifyToken, deleteRoom);
router.post(
  "/rooms/approveRoom",
  verifyToken,
  checkIfUserIsExpert,
  approveRoom
);
=======
router.delete("/topics/:topicId/:roomId",deleteRoom);
router.get("/:id", verifyToken, getRoom);
router.get("/:id/messages", getRoomMessages);
router.get("/", getRooms);

router.post("/topics/:topicId/new", createRoom);
// router.post("/:id/approve", approveRoom);

// router.put("/:id", updateRoom);
>>>>>>> Stashed changes

export default router;
