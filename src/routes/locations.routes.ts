import { Router } from "express";

import listCities from "../modules/locations/useCases/listCities";
import listState from "../modules/locations/useCases/listState";

const locationRouter = Router();

locationRouter.get("/states", (request, response) => {
    return listState().handle(request, response);
});

locationRouter.get("/cities", (request, response) => {
    return listCities().handle(request, response);
});

export { locationRouter };
