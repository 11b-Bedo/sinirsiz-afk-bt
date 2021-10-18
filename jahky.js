const { Client } = require("discord.js");
const tokens = [ODMzNzg5NDc3NTExNjI2ODM0.YH3c9g.IRHu2hcldDeXA_h9By_jlFBJG5Q]
const voice = ""
tokens.forEach(token => {
    const client = new Client();
    client.on("ready", () => {
        if (voice) { client.channels.cache.get(voice).join() }
        client.user.setPresence({ activity: { name: "https://github.com/jahkyxd/", type: "COMPETING" }, status: "dnd" })
    })
    client.login(token).then(x => console.log(`(${client.user.username}) adlı bota giriş yapıldı.`)).catch(err => console.log(`${token.substring(Math.floor(token.length / 2))} adlı bota giriş yapılırken hata oluştu! Sebeb: ${err}`));
})
