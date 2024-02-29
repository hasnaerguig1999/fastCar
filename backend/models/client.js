import { DataTypes } from 'sequelize';
import sequelize from '../config/database';

const Client = sequelize.define('clients', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  isCompany: DataTypes.BOOLEAN,
  surname: DataTypes.STRING,
  firstname: DataTypes.STRING,
  companyName: DataTypes.STRING,
  btwNumber: DataTypes.STRING,
  street: DataTypes.STRING,
  postalCode: DataTypes.STRING,
  city: DataTypes.STRING,
  country: DataTypes.STRING,
  email: DataTypes.STRING,
  phonenumber: DataTypes.STRING,
  mobilenumber: DataTypes.STRING,
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  // compagny_id: DataTypes.INTEGER,
}, {
  timestamps: false,
});

Client.sync({ alter: true }).then(() => {
    // Maintenant, la table `clients` est créée (si elle n'existait pas déjà)
    // et vous pouvez insérer des données ici si nécessaire
    Client.create({
      // Vos données ici
    });
  });

export default Client;