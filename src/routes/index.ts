import { Router } from "express";

import { authenticateRouter } from "./authenticate.routes";
import { locationRouter } from "./locations.routes";
import { rankingRouter } from "./rankings.routes";

const router = Router();

router.use("/auth", authenticateRouter);
router.use("/rankings", rankingRouter);
router.use(locationRouter);

export { router };
