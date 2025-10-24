const {DataTypes} = require('sequelize');

const db = require('../db/conn');

const Product = db.define('Product', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price:{
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
    },
});

module.exports = Product;