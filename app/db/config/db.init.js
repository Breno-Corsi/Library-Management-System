// db.init.js

/* ┌────────────────────────────────────────────────────────────────────────┐
   │                         Database Initialization                        │
   │                                                                        │
   │ Setup Instructions:                                                    │
   │                                                                        │
   │ 1. Add your database name and password to the '.env' file.             │
   │ 2. Define your database schema in './app/db/database.sql'.             │
   │ 3. Create your table definitions inside './app/db/tables/'.            │
   │                                                                        │
   │ ▶ Run the following command in the terminal to initialize:             │
   │    node ./app/db/config/db.init.js                                     │
   │                                                                        │
   └────────────────────────────────────────────────────────────────────────┘ */

require('dotenv').config();
const { execSync } = require('child_process');
const fs = require('fs');

const DB_PASSWORD = process.env.DB_PASSWORD;

function SQLScript(pathToSQL) {
    try {
    const consoleResponse = execSync(`mysql -u root -p${DB_PASSWORD} < ${pathToSQL}`, { encoding: "utf-8" });
    console.log(`${pathToSQL} executed successfully!`);
    }
    catch(err) {
        console.log(`Unable to run ${pathToSQL}\n${err}`);
    }
}

SQLScript("./app/db/database.sql");

const pathToTablesFolder = './app/db/tables/';

fs.readdirSync(pathToTablesFolder).forEach(file => {
    SQLScript(pathToTablesFolder + file);
});
