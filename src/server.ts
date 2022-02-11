import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

import { context } from "./context";

const app = express();
app.use(cors(), bodyParser.json());

app.listen(4000, () => console.info(`Server started on port ${4000}`));
