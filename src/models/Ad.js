const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "ad",
    {
      body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      creationDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    { timestamps: false }
  );
};
