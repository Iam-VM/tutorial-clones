const {Sequelize} = require("sequelize");



//The below statements is the instantiation and initialization of the Sequelize class.
//It is available in sequelize official doc [Getting Started section].

const sequelize = new Sequelize('codegig', 'postgres', '12345678', {
  host: 'localhost',
  dialect: 'postgres'
});


// During Initialization of Sequelize instant, I named the instant as sequelize [as specified in doc]


module.exports = sequelize;