import express from "express";
import { router as listingsRouter } from "./listings.router";
import { router as usersRouter } from "./users.router";

export const router = express.Router();

router.use("/listings", listingsRouter);
router.use("/users", usersRouter);
