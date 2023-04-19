const mongoose = require("mongoose");

const app = require("./app");
const { DB_HOST, PORT } = process.env;

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(console.log("DB_HOST", DB_HOST))
  .then(
    app.listen(PORT, () => {
      console.log("Database connection successful");
    })
  )
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
