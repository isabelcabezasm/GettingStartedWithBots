## Bringing up your bot

If we want a well-mannered bot, it should have a good answer for a user message.

A user message is saved in the "message" property of the "session" object that we have seen in the last example.

[second.js](second.js)

```javascript
bot.dialog('/', function(session){
    var userMessage = session.message.text;
    session.send('You have said :' + userMessage);
});
```

In many cases we'll send this message to [LUIS](https://www.microsoft.com/cognitive-services/en-us/language-understanding-intelligent-service-luis) (or other natural language processor) for analysis and processing (as we shall soon see) and depending on the LUIS' answer, the bot will answer either thing or the other.

At the moment, our example bot only reply the same the user said but starting the sentence with "You have said".

We can run it, and see how it works:

![Visual Studio Code, console, bot running](/images/second5.png)


