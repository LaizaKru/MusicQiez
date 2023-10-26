"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Question.init(
    {
      answer: {
        type: Sequelize.TEXT,
      },
      question: {
        type: Sequelize.TEXT,
      },
      img: {
        type: Sequelize.TEXT,
      },
      themeId: {
        type: Sequelize.INTEGER,
      },
      url: {
        type: Sequelize.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Question",
    }
  );
  return Question;
};
