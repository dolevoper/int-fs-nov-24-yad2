import "dotenv/config";

import { createServer } from "http";
import mongoose from "mongoose";
import { app } from "./app";

const server = createServer(app);

async function init() {
    await mongoose.connect(process.env.CONNECTION_STRING!, {
        dbName: "yad2",
    });

    server.listen(8090, () => console.log("Server listening on port 8090"));
}

init();

export default app;
