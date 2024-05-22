import express from "express";
import {
  createMessage,
  getMessages,
  getMessage,
  deleteMessage,
  upvoteMessage,
  downvoteMessage,
  replyMessage,
  pinMessage,
  unpinMessage,
} from "../controllers/message.controller.js";
import {
  checkIfUserIsExpert,
  checkIfUserIsModerator,
  verifyToken,
} from "../middleware/jwt.js";

const router = express.Router();

// create endpoint to fetch messages

router.get("/messages", verifyToken, getMessages);
router.get("/messages/:id", verifyToken, getMessage);

router.delete("/messages/:id", verifyToken, deleteMessage);

router.post("/messages", createMessage);
router.post("/messages/:id/upvote", verifyToken, upvoteMessage);
router.post("/messages/:id/downvote", verifyToken, downvoteMessage);
router.post("/messages/:id/reply", verifyToken, replyMessage);
router.post(
  "/messages/:id/pin",
  verifyToken,
  checkIfUserIsModerator,
  pinMessage
);
router.post("/messages/:id/unpin", verifyToken, unpinMessage);
export default router;
