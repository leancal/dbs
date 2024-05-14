import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const AudioModel = db.define('audio', {
    sku: { type: DataTypes.STRING },
    longDesc: { type: DataTypes.TEXT },
    shortDesc: { type: DataTypes.TEXT },
    name: { type: DataTypes.STRING },
}, {
    tableName: 'audio' // Nombre de la tabla en la base de datos
});


export default AudioModel;
