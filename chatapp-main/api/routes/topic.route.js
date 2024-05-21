import express from "express";
import {
  createTopic,
  deleteTopic,
  getTopic,
  getTopics,
  updateTopic,
  getRoomsByTopic,
} from "../controllers/topic.controller.js";

import {
  checkIfUserIsAdmin,
  checkIfUserIsExpert,
  checkIfUserIsModerator,
  verifyToken,
} from "../middleware/jwt.js";

const router = express.Router();
router.get("/topics", getTopics);
router.get("/topics/:id", verifyToken, getTopic);
router.post("/topics", createTopic);
router.post("/topics/:id", verifyToken, updateTopic);
router.delete("/topics/:id", verifyToken, checkIfUserIsExpert, deleteTopic);
router.get('/topics/:topicId/rooms', getRoomsByTopic);

export default router;
