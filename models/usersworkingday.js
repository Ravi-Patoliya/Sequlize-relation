'use strict';
module.exports = (sequelize, DataTypes) => {
  const UsersWorkingDay = sequelize.define('UsersWorkingDay', {
    userId: DataTypes.INTEGER,
    workingDayId: DataTypes.INTEGER
  }, { freezeTableName: true });

  UsersWorkingDay.associate = (models) => {
    UsersWorkingDay.belongsTo(models.User, { foreignKey: 'userId' })
    UsersWorkingDay.belongsTo(models.WorkingDay, { foreignKey: 'workingDayId' })
  };

  return UsersWorkingDay;
};