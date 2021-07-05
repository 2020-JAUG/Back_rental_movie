const config = require('./config/config.json');

const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE || config.development.database,
    process.env.MYSQL_USER || config.development.username,
    process.env.MYSQL_PASSWORD || config.development.password,
    {
        host: process.env.MYSQL_HOST || config.development.host,
        port: process.env.MYSQL_PORT || config.development.port || '3306',
        dialect: 'mysql',
        operatorAliases: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
    },

function conectar(){
    //Conexion con base de datos
        $mysqli = new mysqli("eu-cdbr-west-01.cleardb.com:3306", "bdb4122922921c","8e221c14", "heroku_354ec26f7cf16ec");
        if ( $mysqli == connect_errno) {
         console.log("Falló la conexión con MySQL:  . $mysqli -> connect_errno .  . $mysqli->connect_error");
        }
    
        return $mysqli;
    
    }
);

module.exports = sequelize.authenticate().then((db) => {
    console.log('MYSQL connection succesfull'); return db;
});