import express from "express";
import bodyParser from "body-parser";
import routes from "./routes.mjs";

const app = express();

app.use(routes);

app.use(bodyParser.json());

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
