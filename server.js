//Node Packages...
let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let path = require("path");

let PORT = process.env.PORT || 8080;

//To serve css and img
app.use(express.static(`${__dirname}/app`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

//Routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//Listener
app.listen(PORT, function() {
    console.log(`App is listening on PORT: ${PORT}`);
});