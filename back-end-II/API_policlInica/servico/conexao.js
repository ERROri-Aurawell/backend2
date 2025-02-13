import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    port     : 3306,
    host     : 'localhost',
    user     : 'clinica',
    password : 'clinica_007',
    database : 'Clinica'
});

export default pool;