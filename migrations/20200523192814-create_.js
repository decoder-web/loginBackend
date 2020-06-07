'use strict';

module.exports = {
  up: (queryInterface, sequelize) => {

    return queryInterface.createTable('user_table', 
    {
      id: {type:sequelize.INTEGER, unique: true , allowNull: false, primaryKey: true,  autoIncrement: true},
      user_name: {type:sequelize.STRING, allowNull: false},
      password:{type:sequelize.STRING, allowNull: false},
      email:{type:sequelize.STRING, allowNull: false},
  })
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.dropTable('user_table');
  }
};
