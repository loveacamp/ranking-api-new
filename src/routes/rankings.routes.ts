import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ansureAutenticated";
import createRanking from "../modules/rankings/useCases/createRanking";
import listRankings from "../modules/rankings/useCases/listRankings";

const rankingRouter = Router();

rankingRouter.get("", (request, response) => {
    listRankings().handle(request, response);
});

rankingRouter.post("", ensureAuthenticated, (request, response) => {
    return createRanking().handle(request, response);
});

export { rankingRouter };
