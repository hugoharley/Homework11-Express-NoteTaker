// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
var fs = require('fs');
var path = require("path");
let database = require("../db/db.json");
var noteID = 0;

module.exports = function (app) {


    app.get("/api/notes", function (req, res) {

        res.json(database);
    });



    app.post("/api/notes", function (req, res) {

        let newNote = req.body;
        newNote.id = noteID++; //this is the note
        database.push(newNote);
        res.json(newNote);


    });



    app.delete("/api/notes/:id", function (req, res) {
        let noteDelete = req.params.id;
        console.log(noteDelete)
        for (let i = 0; i < database.length; i++) {
            let del = database[i];
            if (del.id === noteDelete) {
                database.splice(i);
                res.json(true)
            }
        }
    });
};

//console.log(noteData);
/*app.get('api/notes', function (req,res){
    res.status(200).json(noteData);
});*/