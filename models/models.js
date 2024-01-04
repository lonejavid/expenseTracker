const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const userDetails=sequelize.define('userdata',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true,
        unique:true
    },
    amount:{
        type:Sequelize.DOUBLE,
        allowNull:false
    },
    desc:{
        type:Sequelize.STRING,
        allowNull:false
    },
    category:{
        type:Sequelize.STRING,
        allowNull:false
    }
});
module.exports=userDetails;