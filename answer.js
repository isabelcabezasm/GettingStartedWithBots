var builder = require("botbuilder");

//create the connector
var connector = new builder.ConsoleConnector().listen();

//create the botbuilder
var bot= new builder.UniversalBot(connector);

//add the dialog
bot.dialog('/', [
    function(session){
        builder.Prompts.text('Please, introduce your name');
    },
    function (session, result){
        session.send('Hello '+ result.response);
    }
]);