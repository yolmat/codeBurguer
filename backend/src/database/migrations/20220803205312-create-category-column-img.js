'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('categories', 'path', {
      type: Sequelize.STRING,
    })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('categories', 'path')
  },
}
