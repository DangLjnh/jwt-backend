"use strict";

const { DataTypes } = require("sequelize/dist");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Project", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      slug: {
        type: Sequelize.STRING,
      },
      photoURL: {
        type: Sequelize.STRING,
      },
      publicID: {
        type: Sequelize.STRING,
      },
      hot: {
        type: Sequelize.BOOLEAN,
      },
      status: {
        type: Sequelize.STRING,
      },
      content: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        // type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        // type: "TIMESTAMP",
        defaultValue: Sequelize.literal(
          "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
        ),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable("Project");
  },
};
