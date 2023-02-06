const Sequelize = require('sequelize');

require("dotenv").config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
        host: process.env.DB_HOST,
        port: 3306,
        dialect: "mysql"
    }
)


module.exports = sequelize;