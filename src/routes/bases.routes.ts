import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ansureAutenticated";
import addScores from "../modules/bases/useCases/addScores/addScores";
import createbase from "../modules/bases/useCases/createbase";
import deleteBase from "../modules/bases/useCases/deleteBase";
import listBases from "../modules/bases/useCases/listBases";
import listScores from "../modules/bases/useCases/listScores";

const baseRouter = Router();

baseRouter.get("", (request, response) => {
    return listBases().handle(request, response);
});

baseRouter.post("", ensureAuthenticated, (request, response) => {
    return createbase().handle(request, response);
});

baseRouter.delete("/:baseId", ensureAuthenticated, (request, response) => {
    return deleteBase().handle(request, response);
});

baseRouter.post("/rankings", ensureAuthenticated, (request, response) => {
    return addScores().handle(request, response);
});

baseRouter.get("/scores", (request, response) => {
    return listScores().handle(request, response);
});

export { baseRouter };
