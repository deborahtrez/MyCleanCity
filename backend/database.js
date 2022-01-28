import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('amesa', 'root', {
    dialect: 'mysql',
    host: 'localhost', 
});

export default sequelize;