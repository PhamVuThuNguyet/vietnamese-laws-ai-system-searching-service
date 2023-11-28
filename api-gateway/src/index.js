const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");
const morgan = require("morgan");
require('dotenv').config();

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.use("/api/v1/topics", proxy(process.env.TOPIC_HOST));
app.use("/api/v1/subjects", proxy(process.env.SUBJECT_HOST));

app.listen(3001, () => {
  console.log("Gateway is Listening to Port 3001");
});