'use strict';
module.exports = (sequelize, DataTypes) => {
  const role = sequelize.define('role', {
    name: DataTypes.STRING
  }, {
    underscored: true,
  });
  role.associate = function(models) {
    role.belongsToMany(models.user, {through: 'user_roles'});
  };
  return role;
};