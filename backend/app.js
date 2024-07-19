
import express from "express";


import configRoutes from "./routes/index.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import res from "express/lib/response.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const staticDir = express.static(__dirname + "/public");
const app = express();

app.use("/public", staticDir);
app.use(express.urlencoded({ extended: true }));
const port = 4000 
app.use(express.json());
configRoutes(app)
app.get("/hey",async(req,res)=>{

  console.log("hre in get")
})
app.listen(port, () =>
  console.log(`Server listening on https://localhost:${port}`),
);