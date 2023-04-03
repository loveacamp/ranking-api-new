import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ansureAutenticated";
import createRanking from "../modules/rankings/useCases/createRanking";
import inactiveRanking from "../modules/rankings/useCases/inactiveRanking";
import listRankings from "../modules/rankings/useCases/listRankings";

const rankingRouter = Router();

rankingRouter.get("", (request, response) => {
    listRankings().handle(request, response);
});

rankingRouter.post("", ensureAuthenticated, (request, response) => {
    return createRanking().handle(request, response);
});

rankingRouter.patch("/:rankingId/inactive", (request, response) => {
    return inactiveRanking().handle(request, response);
});

export { rankingRouter };
