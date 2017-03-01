var builder = require("botbuilder");

//create the connector
var connector = new builder.ConsoleConnector().listen();

//create the botbuilder
var bot= new builder.UniversalBot(connector);

//add the dialog
bot.dialog('/', function(session){
    session.send('Hello bot!');
});