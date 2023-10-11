import express from "express"
import cors from "cors"
import hallrouter from "./Routers/hallrouters.js";




const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use("/api/hall", hallrouter);

app.listen(PORT, () => {
  console.log("My App Run In Port-", PORT);
});
