import type { Request, Response } from "express";

import debugModule from "debug";
import express from "express";
import cors from "cors";

const debug = debugModule("instadp_viewer:app");

const app = express();
app.use(express.json({ limit: "500kb" }));

app.use(cors());

["./routes/get.ts"].forEach((route) => {
  require(route).default(app);
});

app.use("*", (req: Request, res: Response) => {
  throw new Error(
    `The request ${req.method} "${req.originalUrl}" did not match any registered routes.`
  );
});

const server = app.listen(process.env.PORT || 3000);
debug(`Listening on port ${server.address().port}`);
