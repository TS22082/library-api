const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRoutes = require("./routes/api-routes");
app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`listening on: http://localhost:${PORT}`);
});
