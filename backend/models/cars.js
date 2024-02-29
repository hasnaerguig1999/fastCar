import { DataTypes } from 'sequelize';
import sequelize from '../config/database';

const Car = sequelize.define('cars', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  chassisNumber: DataTypes.STRING,
  brand: DataTypes.STRING,
  model: DataTypes.STRING,
  carType: DataTypes.STRING,
  transmission: DataTypes.STRING,
  firstRegistration: DataTypes.DATE,
  mileage: DataTypes.INTEGER,
  enginePower: DataTypes.INTEGER,
  cylinder: DataTypes.INTEGER,
  fuel: DataTypes.STRING,
  co2: DataTypes.STRING,
  color: DataTypes.STRING,
  numberKeys: DataTypes.INTEGER,
  cerOfConf: DataTypes.BOOLEAN,
  inspectionForm: DataTypes.BOOLEAN,
  carPass: DataTypes.BOOLEAN,
  registerCert: DataTypes.BOOLEAN,
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
  compagny_id: DataTypes.INTEGER,
}, {
  timestamps: false,
});

Car.sync({ alter: true }).then(() => {
  // Maintenant, la table `cars` est créée (si elle n'existait pas déjà)
  // et vous pouvez insérer des données ici si nécessaire
  Car.create({
    // Vos données ici
  });
});

export default Car;