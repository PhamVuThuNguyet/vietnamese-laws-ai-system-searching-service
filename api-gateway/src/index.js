const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");
const morgan = require("morgan");
require("dotenv").config();
const listEndpoints = require("express-list-endpoints");
const { logAllRoutes } = require("./utils/misc.utils");

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api/v1/topics", proxy(process.env.TOPIC_HOST));
app.use("/api/v1/subjects", proxy(process.env.SUBJECT_HOST));
app.use("/api/v1/indexing", proxy(process.env.INDEXING_HOST));
app.use("/api/v1/charters", proxy(process.env.CHARTER_HOST));
app.use("/api/v1/legal-documents", proxy(process.env.LEGAL_DOCUMENT_HOST));
app.use("/api/v1/feedback", proxy(process.env.FEEDBACK_HOST));

app.listen(3001, () => {
  console.log("Gateway is Listening to Port 3001");
  logAllRoutes(listEndpoints(app));
});
