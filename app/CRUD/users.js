// USERS.js

require('dotenv').config();
const { execSync } = require('child_process');
const fs = require('fs');

const DB_NAME = process.env.DB_NAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

const tableName = "users";


// createUser
let user = {
    userID:"M000001",
    fullName:"John Doe",
    cpf: "01234567890",
    phoneNumber: "+0123456789012",
    email: "johndoe@mail.com"
}

function createUser(userID, fullName, cpf, phoneNumber, email) {
    const command = `
    USE ${DB_NAME};
    INSERT INTO ${tableName} (user_ID, full_name, cpf, phone_number, email)
    VALUES ('${userID}', '${fullName}', '${cpf}', '${phoneNumber}', '${email}');
    `;
    const response = execSync(
        `mysql -u root -p${DB_PASSWORD} -e "${command}"`,
        { encoding: 'utf-8' }
    );
    console.log(response);
}
// createUser(user.userID, user.fullName, user.cpf, user.phoneNumber, user.email);

// readUser
user = {
    userID:"M000001"
}

function readUser(userID) {
    const command = `
    USE ${DB_NAME};
    SELECT * FROM ${tableName}
    WHERE user_ID = '${userID}';
    `;
    const response = execSync(
        `mysql -u root -p${DB_PASSWORD} -e "${command}"`,
        { encoding: 'utf-8' }
    );
    console.log(response);
}
// readUser(user.userID);

// updateUser
user = {
    userID:"M000001",
    fullName:"Roonie James",
    cpf: "09876543210",
    phoneNumber: "+0123456789012",
    email: "rooniejames@mail.com"
}

function updateUser(userID, fullName, cpf, phoneNumber, email) {
    const command = `
    USE ${DB_NAME};
    UPDATE ${tableName}
    SET full_name = '${fullName}',
        cpf = '${cpf}',
        phone_number = '${phoneNumber}',
        email = '${email}'
    WHERE user_ID = '${userID}';
    `;
    const response = execSync(
        `mysql -u root -p${DB_PASSWORD} -e "${command}"`,
        { encoding: 'utf-8' }
    );
    console.log(response);
}
// updateUser(user.userID, user.fullName, user.cpf, user.phoneNumber, user.email);

// deleteUser
user = {
    userID:"M000001"
}

function deleteUser(userID) {
    const command = `
    USE ${DB_NAME};
    DELETE FROM ${tableName}
    WHERE user_ID = '${userID}';
    `;
    const response = execSync(
        `mysql -u root -p${DB_PASSWORD} -e "${command}"`,
        { encoding: 'utf-8' }
    );
    console.log(response);
}
deleteUser(user.userID);