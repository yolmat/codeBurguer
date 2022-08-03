'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('products', 'category_id')
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.createColumn('products', {
      category_id: {
        type: Sequelize.INTEGER,
        references: { model: 'categories', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
    })
  },
}
