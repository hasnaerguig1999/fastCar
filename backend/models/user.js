import { DataTypes } from 'sequelize';
import sequelize from '../config/database';

const User = sequelize.define('users', {
  email: DataTypes.STRING,
  password: DataTypes.STRING,

}, {
  timestamps: false,
});

export default User;