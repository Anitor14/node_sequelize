require("express-async-errors");
const express = require("express");

const { sequelize } = require("./models"); // importing the models.

const app = express();

app.use(express.json());
// app.use(cookieParser(process.env.JWT_SECRET)); // the cookie parser gives us access to the cookies on our request.

app.use(express.static("./public"));
// app.use(fileUpload());

// routers
const userRouter = require("./routes/userRoutes");

app.use("/api/v1/users", userRouter);
const port = process.env.PORT || 3000;

app.listen(port, async () => {
  console.log(`Server is listening on port ${port}...`);
  await sequelize.authenticate(); // creates database tables in our database with reference to our models.
  console.log("Database Connected");
});
