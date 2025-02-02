const {DataTypes} = require('sequelize');
const db = require('../utils/database');

const Talleres = db.define('talleres', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    titulo: {
        type: DataTypes.STRING(256), //string=256 text=unlimited
        allowNull: false,
        unique: true
    },
    totalCompleted: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
},{
    timestamps: false,
})

module.exports = Talleres

/* para insertar valores por defecto en pruebas
INSERT INTO talleres (titulo) 
VALUES 
    ( 'Taller 1 Introducción a app'),
    ( 'Taller 2 Ensamblado del mBot'),
    ( 'Taller 3 Programar el Movimiento'),
    ( 'Taller 4 Sensor Ultrasonido'),
    ( 'Taller 5 Seguidor de Línea'),
	( 'Taller 1 de prueba'),
    ( 'Taller 2 de prueba');
*/