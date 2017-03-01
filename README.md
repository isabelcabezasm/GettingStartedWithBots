# GettingStartedWithBots
Following this MVA Course: https://mva.microsoft.com/en-US/training-courses/getting-started-with-bots-16759

## General information about bots.

### What bots are not
A bot can do basic task, it is used for automate som task like reset passwords, check stock, set an alarm or ask a appointment with your hairdresser. 

A bot is not artificial intelligence **only** 

A bot does not have **only** a text interface. 
It could use images, buttons, carousels, graphs, audio...
You can start a conversation saying something like "I want book an hotel from 20 to 30 of January in Miami", with text, but later it can show you images, cards or other elements to interact.

![Texto alternativo](/images/hotel1.png)

A bot does not tied to natural languages. They can use commands, instructions like a shell. They can use regular expression. 
For example: you could have a bot to manage your Azure Portal, and you could say to it "I want to shotdown my virtual machine called *pepito*" or you could to type only: "shotdown *pepito*" and you can save time of typing (in your mobile phone, for example) .

### What bots are
Bots are a new interface and you can access faster to things you need. Process will be lighter because you will be interpreted.
Bots are technology and platform agnostic: they could be in a lot of channels, applications inside other applications like telegram, skype or inside webs like facebook. They are integrated in these platforms.
Bots are easy to build and deploy because they don't depend of the platform, only of the channel and their limits. It does not matter ir the bot is telegram for Android or for iPhone. 
Interactions with bots are more natural because they don't have buttons like a common application, you can speak with them with your own words and the bot will understand you (well... it depends on bot's intelligence).
A well-done bot should interpret the user's input in terms of the intention and for that we use services.

It is easier explain what do you want than explore and browse in a web site or in an application with a complex user interface.

### Think a of bots as application
Bots are the new apps, the new user interfaces.
Bots are developed with the same design pattern and good practices. They are hosted in the cloud and make our life easier. 

By default, they have a stateless design, they don't keep any memory of anything we've already messaged to them. We don't have the state of the conversation. 

Samples and good practices about bots: [http://github.com/Microsoft/BotBuilder](http://github.com/Microsoft/BotBuilder)

## Creating our first bot
