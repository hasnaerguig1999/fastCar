import { DataTypes } from 'sequelize';
import sequelize from '../config/database';

const Setting = sequelize.define('settings', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  company_logo: DataTypes.STRING,
  company_name: DataTypes.STRING,
  owner_name: DataTypes.STRING,
  owner_lastname: DataTypes.STRING,
  vat_number: DataTypes.STRING,
  street: DataTypes.STRING,
  zip_code: DataTypes.STRING,
  city: DataTypes.STRING,
  country: DataTypes.STRING,
  owner_email: DataTypes.STRING,
  owner_phone: DataTypes.STRING,
  owner_website: DataTypes.STRING,
  bank_name: DataTypes.STRING,
  bank_account_number: DataTypes.STRING,
  bic_number: DataTypes.STRING,
  bank_name2: DataTypes.STRING,
  bank_account_number2: DataTypes.STRING,
  bic_number2: DataTypes.STRING,
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
}, {
  timestamps: false,
});

Setting.sync({ alter: true }).then(() => {
  // Maintenant, la table `settings` est créée (si elle n'existait pas déjà)
  // et vous pouvez insérer des données ici si nécessaire
  Setting.create({
    // Vos données ici
  });
});

export default Setting;