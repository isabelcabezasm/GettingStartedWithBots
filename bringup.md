## Raising up your bot

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

We might also want our bot be proactive, in other words, the bot ask you things and it expect the answer was a number, a text or one  of several options. 
When you are developing, the answer of user will be received in the "response" property. 

[answer.js](answer.js)


When the bot asks something to the user and the user provides an answer and we want to keep a status or context, we (as developers) define cascading functions thus: 

```javascript
bot.dialog('/', [

] );
```

We define at least two functions and they are going to operate like a waterfall: the first function it's going to be called, and the it going to wait a response from the user, and the call the second function... and then the third, the fourth and a fifth, just like a waterfall.

For that, we define an array of functions:

```javascript
bot.dialog('/', [
    //first question, done by the bot
    function(session){},

    //get the answer from "result"
    function(sesion, result){}
]);
```

Then, in the first function the bot asks the name to the user:

```javascript
bot.dialog('/', [
    //first question, done by the bot
    function(session){
        builder.Prompt.text('Please, introduce your name');
    },

    //get the answer from "result"
    function(sesion, result){}
]);
```
And then, our bot uses the message and greets the user:

```javascript
bot.dialog('/', [
    //first question, done by the bot
    function(session){
        builder.Prompt.text('Please, introduce your name');
    },

    //get the answer from "result"
    function(session, result){
        session.send('Hello '+ result.response);
    }
]);
```

But when we try it:

``` 
node answer.js
```

And... it doesn't do anything:
If I type something... Uoooopsss!!

![Visual Studio Code, console error](/images/error6.png)