'use strict'

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return await queryInterface.createTable('products', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false, // essa linha faz com que não possam deixar esse valor em branco na hora de jogar no BQ (banco de dados)
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false, // essa linha faz com que não possam deixar esse valor em branco na hora de jogar no BQ (banco de dados)
            },
            price: {
                type: Sequelize.INTEGER,
                allowNull: false, // essa linha faz com que não possam deixar esse valor em branco na hora de jogar no BQ (banco de dados)
            },
            category: {
                type: Sequelize.STRING,
                allowNull: false, // essa linha faz com que não possam deixar esse valor em branco na hora de jogar no BQ (banco de dados)
            },
            path: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DataTypes.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DataTypes.DATE,
                allowNull: false,
            },
        })
    },

    down: async (queryInterface) => {
        return await queryInterface.dropTable('users')
    },
}
