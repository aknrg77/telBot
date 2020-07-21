const express = require('express');
const app = express();
const router = express.Router();
const {Telegraf} = require('telegraf');
const axios = require('axios');



router.get('/',function(req,res){

    const bot = new Telegraf('1196221578:AAE90S5h-rDJgF4rsbia6UJtRH7RjzUGElU');
    // bot.use(async (ctx, next) => {
    //     const start = new Date();
    //     await next();
    //     const ms = new Date() - start;
    //     console.log('Response time: %sms', ms);
    //   })
    

    bot.start((ctx) => {
        ctx.reply("bot has been started");
        });
    bot.help((ctx) => {
            ctx.reply("This can perform the following commands\n - /start\n - /help\n - /dog");
      });
    bot.command('dog',(ctx)=>{
        url = "https://dog.ceo/api/breeds/image/random";
        axios.get(url)
        .then(function(res){
            //console.log(res.data);
            console.log(ctx.reply(res.data.message));
        });
        
    })
     
      
      


      bot.launch();




    res.send("<h1>Telegram Bot</h1>");
});


module.exports = router;