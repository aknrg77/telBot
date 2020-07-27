const express = require('express');
const app = express();
const router = express.Router();
const {Telegraf} = require('telegraf');
const axios = require('axios');
const cheerio = require('cheerio');
const fetch = require('node-fetch');
const { toJson } = require('unsplash-js');
const puppeteer = require('puppeteer');
global.fetch = fetch;
const Unsplash = require('unsplash-js').default;

const unsplash = new Unsplash({
    accessKey : "RhlMULYAsZCrbesFwOrzDkOUkDHeQuG-zhPz-xxjs54",
});




router.get('/',function(req,res){

    const bot = new Telegraf('1340755062:AAGD9McyTkOzr3W_ouysKChtBmJg_PXaGTY');
    bot.start((ctx) => {
        ctx.reply("bot has been started");
        });
    bot.help((ctx) => {
            ctx.reply("This can perform the following commands\n - /start - For starting the bot\n - /dog - Search cute random dog images\n - /search \"any thing you want to search\"\n This bot is been created by https://github.com/aknrg77 make sure to support my project");
      });

    bot.command('dog',(ctx) =>{
        //DOG API
        url = "https://dog.ceo/api/breeds/image/random";
        axios.get(url)
        .then(function(res){
            ctx.reply(res.data.message);
        });
    })
     bot.command('search',(ctx)=>{
        //search Image using UPSPLASH API
        key = ctx.update.message.text.replace('/search ','');
        unsplash.search.photos(key,1,10,{orientation:"portrait"})
        .then(toJson)
        .then(function(json){
            res = json.results[0].urls.small;
            if(res!=undefined){
            ctx.reply(res);
            }else{
            ctx.reply('No photos found');
            }
            //console.log(json.results[0].urls.small);
        })





        // //USING WEB SCRAPPER
        // (async ()=>{

        //     try{
        //     // let res = await axios.get('https://images.google.com/');

        //     // const googleIMG = res.data;
        //     // //lt = $('input').attr('gLFyf gsfi')
        //     // lt = $('input[type="text"]').attr('gLFyf gsfi').val('dog').html()


            
        //     const browser = await puppeteer.launch(
        //         {
        //         headless: false,
        //         executablePath : '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome'
        //     }
        //     );
        //     const page = await browser.newPage();
        //     await page.goto('https://images.google.co.in');
        //     //await page.$eval('.gLFyf', el => el.value = key);
        //     await page.focus('.gLFyf')
        //     page.keyboard.type('dog')
        //     await page.click('.Tg7LZd');
        //     await page.waitForSelector('.mJxzWe');
        // //     img = await page.evaluate(() => {
                
        // //         const images = document.querySelector('div.mJxzWe > div > div >div>div>div>div>div>div a img').src
        // //         return images;

        // //    });
        //    //ctx.reply(img);
        //    await page.click('div.mJxzWe > div > div >div>div>div>div>div>div a img');
        //    await page.waitForSelector('.l39u4d');
        //    await page.click('.n3VNCb');
        //    const img = document.querySelector('html #yDmH0d > div > c-wiz > div > #islsp > #Sva75c > div >div >div >div > c-wiz > div>div>div >div.v4dQwb >a.eHAdSb > img').src
        //     // const img = document.querySelector('.n3VNCb').src;
        //     console.log(img);
        
            
            
           
        
        //     //await page.screenshot({path: 'example.png'});

        //     //await browser.close();


            // }catch(err){
            //     console.log(err);
            // }


        })


  

        
    //})
     
      
      


      bot.launch();




    res.send("<h1>Telegram Bot</h1>");
});


module.exports = router;