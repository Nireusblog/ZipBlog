import mysql from "mysql"

// Create a MySQL connection
export const db = mysql.createConnection({
    host: "localhost", // Hostname or IP address of the MySQL server
    user: "root", // Username for authentication
    password: "zipcode0", // Password for authentication
    database: "blog" // Name of the MySQL database to connect to
})
