const express=require("express");

const bodyParser = require("body-parser");

const {application} = require("express");

const cors = require("cors");

const app = express();

const port = 5001;

const Urlpath = require("./router");


app.use(bodyParser.json());

app.use(cors());

app.use("/" , Urlpath);

app.use("/api/model" , Urlpath);

app.use("/api/users" , Urlpath);

app.use("/api/overview" , Urlpath);

app.use("/api/filter" , Urlpath);

app.use("/api/modelf" , Urlpath);

app.use("/api/filter2" , Urlpath);

app.use("/api/triage" , Urlpath);

app.use("/api/distriage1" , Urlpath);

app.use("/api/updatetriage1" , Urlpath);

app.use("/api/updatetriage2" , Urlpath);

app.use("/api/updatetriage3" , Urlpath);

app.use("/api/updatet1/:id" , Urlpath);

app.use("/api/distriage2" , Urlpath);

app.use("/api/distriage3" , Urlpath);

app.use("/api/addEntry" , Urlpath);

app.use("/api/addEntrycur" , Urlpath);

app.use("/api/deleteEntrycur/:id" , Urlpath);

app.use("/api/deleteEntry1" , Urlpath);

app.use("/api/deleteEntry2" , Urlpath);

app.use("/api/deleteEntry3" , Urlpath);

app.use("/api/over/:inputValue2" , Urlpath);

app.use("/api/updateEntrymodel" , Urlpath);

app.use("/api/updateEntrycur/:id" , Urlpath);

app.use("/api/updateEntrycurup/:id" , Urlpath);

app.listen(port , ()=>console.log("Listening at port 5001"));