'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    name: DataTypes.STRING
  }, {freezeTableName: true});

  Company.associate = (models)=> {
    Company.hasMany(models.User, {as: 'employes'})
  };
  
  return Company;
};