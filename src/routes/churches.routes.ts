import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ansureAutenticated";
import createChurch from "../modules/churches/useCases/createChurch";
import editChurch from "../modules/churches/useCases/editChurch";
import listChurches from "../modules/churches/useCases/listChurches";

const churchRouter = Router();

churchRouter.get("", ensureAuthenticated, (request, response) => {
    return listChurches().handle(request, response);
});

churchRouter.post("", ensureAuthenticated, (request, response) => {
    return createChurch().handle(request, response);
});

churchRouter.put("/:churchId", ensureAuthenticated, (request, response) => {
    return editChurch().handle(request, response);
});

export { churchRouter };
