module.exports = (sequelize, Sequelize) => {
    const subscriptions = sequelize.define("subscriptions", {
      endpoint: {
        type: Sequelize.TEXT,
        allowNull: false 
      },
      auth: {
        type: Sequelize.STRING,
        allowNull: true
      },
      p256dh: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      isDelete: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
    });
  
    return subscriptions;
  };