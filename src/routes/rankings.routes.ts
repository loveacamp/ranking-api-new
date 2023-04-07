import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ansureAutenticated";
import createRanking from "../modules/rankings/useCases/createRanking";
import editRanking from "../modules/rankings/useCases/editRanking";
import inactiveRanking from "../modules/rankings/useCases/inactiveRanking";
import listAllRankings from "../modules/rankings/useCases/listAllRankings";
import listRankings from "../modules/rankings/useCases/listRankings";

const rankingRouter = Router();

rankingRouter.get("", (request, response) => {
    return listRankings().handle(request, response);
});

rankingRouter.get("/all", ensureAuthenticated, (request, response) => {
    return listAllRankings().handle(request, response);
});

rankingRouter.post("", ensureAuthenticated, (request, response) => {
    return createRanking().handle(request, response);
});

rankingRouter.put("/:rankingId", ensureAuthenticated, (request, response) => {
    return editRanking().handle(request, response);
});

rankingRouter.patch(
    "/:rankingId/inactive",
    ensureAuthenticated,
    (request, response) => {
        return inactiveRanking().handle(request, response);
    }
);

export { rankingRouter };
