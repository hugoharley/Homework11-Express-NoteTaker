// Dependencies
var express = require("express");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());//you're going to be getting data in post and handling it as json
app.use(express.static(path.join(__dirname, 'public')));


require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
