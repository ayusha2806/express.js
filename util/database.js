const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete','root','ayush2anand',{
    dialect:'mysql',
    host: 'localhost'
}) 
module.exports = sequelize;