import "dotenv/config";
import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors"

import { AppError } from "./errors/AppErros";
import { router } from "./routes";

const app = express();

// const options = { origin: ['*'], credentials: true, exposedHeaders: '*, Authorization' }

app.use(cors())

app.use(express.json());

app.use(router);

app.use(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({
                message: err.message,
            });
        }

        console.error(err);
        return response.status(500).json({
            status: "error",
            message: `Internal server error - ${err.message}`,
        });
    }
);

app.listen(3001, () =>
    console.log("🚀️🚀️ Server is running on port 3001 🧨️🧨️")
);
