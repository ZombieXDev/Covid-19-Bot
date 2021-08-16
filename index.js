//////////////////////////////////////
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = process.env.prefix;
const fetch = require("node-fetch");
//////////////////////////////////////


/////////////////Event Ready/////////////////////
client.on("ready", () => {
  console.log(`[ - Bot is Online - ]`);
  console.log(`Name Bot : ${client.user.username}`);
  console.log(`Guilds : ${client.guilds.cache.size}`);
  console.log(`Users : ${client.users.cache.size}`);
  console.log(`Channels : ${client.channels.cache.size}`);
  client.user.setActivity(`${prefix}help | ( Stay Home )`, {
    type: "PLAYING"
  });
});
//////////////////////////////////////

/*

- [ All rights reserved ZombieX in YT ] -

*/
client.on('message', message =>{
if(message.content === prefix + "help"){
const embed = new Discord.MessageEmbed()
.setColor("#396CB0")
.setThumbnail("https://e.top4top.io/p_18371rmun1.png")
.addField(`${prefix}total`, 'لاظهار أحصائيات كورونا في العالم', true)
.addField(`${prefix}country`, 'لاظهار أحصائيات كورونا في بلد معين', true)
.addField(`${prefix}today`, 'لاظهار أحصائيات كورونا لليوم في بلد معين', true)
.addField(`${prefix}instructions`, 'لاظهار أرشادات الوقاية ضد كورونا', true)
.setFooter('Stay Home')
message.channel.send(embed)
}
});

/*

- [ All rights reserved ZombieX in YT ] -

*/

client.on('message', message =>{
if(message.content === prefix + "instructions"){
  const ins = [
'http://www.emro.who.int/images/stories/coronavirus/overall_ar.png',
'http://www.emro.who.int/images/stories/coronavirus/isolate_ar.png',
'http://www.emro.who.int/images/stories/coronavirus/handwash_ar.png',
'http://www.emro.who.int/images/stories/coronavirus/foodsafetychoppingboard_ar.png',
'http://www.emro.who.int/images/stories/coronavirus/coronavirus_drugs.png',
'http://www.emro.who.int/images/stories/coronavirus/protect_your_self_and_others_travel_health_ar.png'
];
const embed = new Discord.MessageEmbed()
.setColor("#00ccff")
.setAuthor("أرشاادات منظمة الصحة العالمية","https://www.who.int/images/default-source/infographics/who-emblem.png?sfvrsn=877bb56a_2")
.setImage(`${ins[Math.floor(Math.random() * ins.length)]}`)
.setFooter('Stay Home')
message.channel.send(embed)
}
});

/*

- [ All rights reserved ZombieX in YT ] -

*/

client.on('message', function(message) {
if(message.content.startsWith(prefix + "today")) {
let args = message.content.split(" ").slice(1).join(" ");
if (!args) return message.channel.send(`أكتب أسم الدولة`);
fetch(`https://disease.sh/v3/covid-19/countries/${args}`)
.then(res => res.json())
.then(body => {
const embed = new Discord.MessageEmbed()
.setColor("#80C341")
.setAuthor(`أحصائيات ${body.country} لليوم`,"https://cdn.pixabay.com/photo/2020/05/22/19/51/corona-5206905_1280.png")
.setThumbnail(body.countryInfo.flag)
.addField("`أصابات اليوم`", `${body.todayCases}`,true)
.addField("`وفيات اليوم`", `${body.todayDeaths}`,true)
.addField("`حالات شفاء اليوم`", `${body.todayRecovered}`,true)
.setTimestamp()
message.channel.send(embed)
}).catch(e => {
return message.channel.send('Invalid country provided')          
})
}
});

/*

- [ All rights reserved ZombieX in YT ] -

*/

client.on('message', function(message) {
if(message.content.startsWith(prefix + "country")) {
let args = message.content.split(" ").slice(1).join(" ");
if (!args) return message.channel.send(`أكتب أسم الدولة`);
fetch(`https://disease.sh/v3/covid-19/countries/${args}`)
.then(res => res.json())
.then(body => {
const embed = new Discord.MessageEmbed()
.setColor("#80C341")
.setAuthor(`أحصائيات ${body.country}`,"https://cdn.pixabay.com/photo/2020/05/22/19/51/corona-5206905_1280.png")
.setThumbnail(body.countryInfo.flag)
.addField("`الاصابات`", `${body.cases}`,true)
.addField("`الوفيات`", `${body.deaths}`,true)
.addField("`الشفاء`", `${body.recovered}`,true)
.setTimestamp()
message.channel.send(embed)
}).catch(e => {
return message.channel.send('Invalid country provided')          
})
}
});

/*

- [ All rights reserved ZombieX in YT ] -

*/

client.on('message', message =>{
if(message.content === prefix + "total"){
fetch(`https://disease.sh/v3/covid-19/all`)
.then(res => res.json())
.then(body => {
const embed = new Discord.MessageEmbed()
.setColor("#80C341")
.setThumbnail("https://cdn.pixabay.com/photo/2020/05/22/19/51/corona-5206905_1280.png")
.addField("`الاصابات`", `${body.cases}`,true)
.addField("`الوفيات`", `${body.deaths}`,true)
.addField("`الشفاء`", `${body.recovered}`,true)
.setTimestamp()
message.channel.send(embed)           
})           
}
});



//////////////////////////////
require('./server')();
client.login(process.env.token)
//////////////////////////////
