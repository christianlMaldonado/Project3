require("dotenv").config();

module.exports = {
  database: process.env.DBASE,
  secret: process.env.SECRET,
};
