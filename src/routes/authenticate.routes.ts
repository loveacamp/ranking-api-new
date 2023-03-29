import { Router } from "express";

import authenticateUser from "../modules/accounts/useCases/authenticateUser";
import createUser from "../modules/accounts/useCases/createUser";

const authenticateRouter = Router();

authenticateRouter.post("/login", (request, response) => {
    return authenticateUser().handle(request, response);
});

authenticateRouter.post("/register", (request, response) => {
    return createUser().handle(request, response);
});

export { authenticateRouter };
