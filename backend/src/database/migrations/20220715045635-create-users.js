'use strict'

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return await queryInterface.createTable('users', {
            id: {
                type: Sequelize.DataTypes.UUID,
                defaultValue: Sequelize.DataTypes.UUIDV4,
                allowNull: false, // essa linha faz com que não possam deixar esse valor em branco na hora de jogar no BQ (banco de dados)
                primaryKey: true, // essa linha faz com que não possam existir 2 valores iguais dentro desse BD (não pode ter dois ID's)
            },
            name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false, // essa linha faz com que não possam deixar esse valor em branco na hora de jogar no BQ (banco de dados)
            },
            email: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false, // essa linha faz com que não possam deixar esse valor em branco na hora de jogar no BQ (banco de dados)
                primaryKey: true, // essa linha faz com que não possam existir 2 valores iguais dentro desse BD (não pode ter dois emais)
            },
            password_hash: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false, // essa linha faz com que não possam deixar esse valor em branco na hora de jogar no BQ (banco de dados)
            },
            admin: {
                type: Sequelize.DataTypes.BOOLEAN, // verificar se e true ou false
                defaultValue: false,
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
