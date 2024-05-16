import express from "express";
import { verifyToken, getAuthenticatedUser, register, login, logout } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/authenticated-user", verifyToken, getAuthenticatedUser);

export default router;
