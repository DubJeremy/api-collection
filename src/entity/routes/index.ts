import { Router } from "express";

// TODO Middleware check JWT
// import { checkJwt } from "../middlewares/checkJwt";

const router = Router();

// router.use("/auth", authRoutes);
// router.use("/user", userRoutes);
// router.use("/collection", collectionRoutes);
// router.use("/cards", cardsRoutes);

router.use("*", (req, res) => res.sendStatus(404));

export default router;
