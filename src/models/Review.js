const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "review",
    {
      likes: {
        type: DataTypes.BOOLEAN,
        default: false,
      },
      dislikes: {
        type: DataTypes.BOOLEAN,
        default: false,
      },
      saved: {
        type: DataTypes.BOOLEAN,
        default: false,
      },
    },
    { timestamps: false }
  );
};
