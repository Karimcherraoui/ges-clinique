import { Sequelize } from "sequelize";
import "dotenv/config";
const { DB_HOST, DB_USER, DB_PASS, DB_NAME , DB_PORT } = process.env;
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
	dialect: "mysql",
	host: DB_HOST,
	port: DB_PORT
});
export default sequelize;
