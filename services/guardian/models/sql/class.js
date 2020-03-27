'use strict';
module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define('class', {
    name: DataTypes.STRING,
    capacity: {
      type: DataTypes.INTEGER,
      validate: {
        min: 5,
        max: 100
      }
    }
  }, {
    underscored: true,
    timestamps: false
  });
  Class.associate = function(models) {
    Class.hasMany(models.child);
    Class.belongsTo(models.user, {as: 'Teacher'});
    Class.belongsTo(models.kindergarten);
  };
  return Class;
};