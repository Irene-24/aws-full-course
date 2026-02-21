const express = require("express");
const cors = require("cors");
const router = require("./routes");

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
