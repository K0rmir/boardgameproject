// The below creates the database by first importing it from the "better-sqlite3" module
// It then saves this new database as a module

import Database from "better-sqlite3"
const db = new Database("database.db");

// This creates the table in which our data will be stored. "IF NOT EXISTS" is important to add to that 
// it doesn't try and recreate the table everytime.
// As many columns as we need can be added here with the value it requires. INT is used for numbers.
// Everything written in the brackets is SQL.

db.exec(`CREATE TABLE IF NOT EXISTS marketplacelistings(
    title TEXT,
    price INTEGER,
    condition TEXT,
    description TEXT
)`);

// The below statement is pushed to the database manually by me but are not a requirement. 
// If they were not here the database would simply be empty when we load up the client. 

db.exec(`
    INSERT INTO marketplacelistings (title, price, condition, description)
    VALUES
    ('Kelp', '35', 'New', 'Brand new, still wrapped')    
`);