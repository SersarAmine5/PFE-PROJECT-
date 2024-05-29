import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
  followUser,
  unfollowUser,
  getFollowers,
  remove_expert,
  update_moderator,
  remove_moderator,
  bloquer_user,
  debloquer_user,
  getFollowing,
  getSubmitedUsers,
  update_submit,
  approuver_expert
} from "../controllers/user.controller.js";
import {
  checkIfUserIsAdmin,
  checkIfUserIsBlocked,
  checkIfUserIsDeblocked,
  checkIfUserIsModerator,
  verifyToken,
} from "../middleware/jwt.js";

const router = express.Router();

router.delete("/users/bloqueruser/:id", verifyToken, deleteUser);
router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.patch("/users/:id", verifyToken, updateUser);
router.post("/users/:id/follow", verifyToken, followUser);
router.post("/users/:id/unfollow", verifyToken, unfollowUser);
router.get("/users/:id/followers", getFollowers);
router.get("/users/:id/following", getFollowing);
router.get("/usersSubmited", getSubmitedUsers);
router.put("/updatesubmit/:id", update_submit);
router.put(
  "/users/approuver_expert/:id",
  verifyToken,
  approuver_expert
);
router.post(
  "/users/:id/remove_expert",
  verifyToken,
  remove_expert
);
router.put(
  "/users/updaterole/:id",
  verifyToken,
  update_moderator
);
router.put(
  "/users/removemoderator/:id",
  verifyToken,
  remove_moderator
);
router.patch(
  "/users/:id/bloquer_user",
  verifyToken,
  checkIfUserIsModerator,
  checkIfUserIsDeblocked,
  bloquer_user
);
router.patch(
  "/users/:id/debloquer_user",
  verifyToken,
  checkIfUserIsModerator,
  checkIfUserIsBlocked,
  debloquer_user
);
export default router;
