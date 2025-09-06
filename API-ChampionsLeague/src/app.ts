import express from "express";
import router from "./routes/routes";
import cors from "cors"
const app = express();

function createApp(){

    app.use(express.json())
    app.use("/api", router)
    const corsOptions = {
        
    }
    app.use(cors())

    return app;
}

export default createApp;
