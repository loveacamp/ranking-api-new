import { Router } from "express";

import { authenticateRouter } from "./authenticate.routes";
import { baseRouter } from "./bases.routes";
import { churchRouter } from "./churches.routes";
import { locationRouter } from "./locations.routes";
import { rankingRouter } from "./rankings.routes";

const router = Router();

router.use("/auth", authenticateRouter);
router.use("/rankings", rankingRouter);
router.use("/churches", churchRouter);
router.use("/bases", baseRouter);
router.use(locationRouter);

export { router };
