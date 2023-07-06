const sqlite3 = require("sqlite3").verbose();
const { rename } = require("node:fs");
const path = require("node:path");

const db = new sqlite3.Database(path.join(__dirname, "sample.db"), sqlite3.OPEN_READWRITE, (error) => {
    if (error){
        return console.error(error);
    }
    console.log("Connected to database!");
})

/*
CRUD
CREATE
READ
UPDATE
DELETE
*/

const Timmy = {
    ID: "1234567",
    Username: "Timmy",
    Email: "timmy@failure.org",
    DOB: "2005-10-28"
}

function CallbackFunc(Error, Results){
    if (Error){
        console.error(Error);
        return;
    }
    console.log("Executed SQL Query successfully!");
    if (!Results) return;
    Results.forEach(data => console.log(data));
}

let sql = `create TABLE table_name (
 Col1 DataType PREMARY KEY,
    Col2 DataType,
    Col3 DataType
 );
`
let sql2=`SELECT name FROM pragma_table_info('Users')`
let c=`alter TABLE Users
RENAME column Email to Emali`
   

let sql3 =`INSERT INTO Users(id,Username,Emali,DOB)
VALUES("13581","Bob","bob@csie.com","2005.10.28")`

let sql4=`SELECT * FROM Users`;


let sql5=`SELECT * FROM Users WHERE id = "13581";`;

let sql6=`UPDATE Users SET Emali = "yencheng is a handsome boy" WHERE id = "13581";`;

let sql7=`DELETE FROM Users WHERE id="1234567";`;


//db.exec(sql, CallbackFunc);
//db.all(sql2, CallbackFunc);
//db.all(sql3, CallbackFunc);
//db.all(sql4, CallbackFunc);
//db.all(sql5, CallbackFunc);
//db.all(sql6, CallbackFunc);
//db.exec(sql7, CallbackFunc);