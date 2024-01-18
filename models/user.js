'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    password: DataTypes.STRING,
    status_id: DataTypes.INTEGER,
    role_id: DataTypes.INTEGER,
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
    },
    updatedAt: {
        field: 'updated_at',
        type: DataTypes.DATE,
    },
    deletedAt: {
      field: 'deleted_at',
      type: DataTypes.DATE,
    },
  }, {
    paranoid: true,
    sequelize,
    modelName: 'users',
  });
  return User;
};