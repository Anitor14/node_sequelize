const { sequelize } = require("./models"); // importing the models.

async function main() {
  await sequelize.sync(); // creates database tables in our database with reference to our models.
}

main();
