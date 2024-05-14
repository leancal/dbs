import { Sequelize } from "sequelize";

const db = new Sequelize('aiwa_web', 'aiwa_web', '@BaseSitioAiwa2024@', {
    host: 'totalhome.xvserver.com',
    dialect: 'mysql'
});

export default db;