import express from "express";
import bodyParser from "body-parser";
import routes from "./routes.mjs";
import cors from "cors";

const app = express();

app.use(cors({
    origin: 'http://localhost:4200',
    methods: 'GET, POST, PUT, DELETE, PATCH',
    allowedHeaders: 'Content-Type, Authorization',
  }));

app.use(routes);

app.use(bodyParser.json());

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
