const Sequelize = require('sequelize');


 const sequelize = new Sequelize('shopapp', 'root', 'Arun2095@', {
  host: '127.0.0.1',
  port:'3307',
  dialect: 'mysql' 
});


module.exports = sequelize