const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_00_10_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDI4LFxuICAgICAgICAyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM1LFxuICAgICAgICAzNixcbiAgICAgICAgODksXG4gICAgICAgIDk5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQxLFxuICAgICAgICA4MixcbiAgICAgICAgMjI4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODAsXG4gICAgICAgIDgsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDgxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNCxcbiAgICAgICAgODksXG4gICAgICAgIDYyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDg4LFxuICAgICAgICAzNCxcbiAgICAgICAgODcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY3LFxuICAgICAgICA2NixcbiAgICAgICAgNjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjE3LFxuICAgICAgICAyNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDksXG4gICAgICAgIDIzNixcbiAgICAgICAgMzMsXG4gICAgICAgIDMwLFxuICAgICAgICA5MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTA0LFxuICAgICAgICA1NixcbiAgICAgICAgMTMsXG4gICAgICAgIDgwLFxuICAgICAgICA0NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDcyLFxuICAgICAgICAxODEsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQzLFxuICAgICAgICA4LFxuICAgICAgICAzMyxcbiAgICAgICAgNixcbiAgICAgICAgMTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMixcbiAgICAgICAgMTczLFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDMxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTM2LFxuICAgICAgICA5NSxcbiAgICAgICAgNjksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA1LFxuICAgICAgICA5MixcbiAgICAgICAgMzQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODgsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDc2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTE4LFxuICAgICAgICA4NSxcbiAgICAgICAgMzksXG4gICAgICAgIDM5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTI1LFxuICAgICAgICA3OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDYyLFxuICAgICAgICA0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTUsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDUwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjI3LFxuICAgICAgICA0MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE4LFxuICAgICAgICA5MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjAwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTYsXG4gICAgICAgIDg1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDMsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjU0LFxuICAgICAgICA4MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNCxcbiAgICAgICAgODYsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjFyL1hnRUJLZlFUSGQzcFVVYm9sMVB2R2tmUjBuWXJ5WDNGZ2pMSmxnTTA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjhQYU5VeTVFUVlLS1NZVGpoM3AtbHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDcxZDU2YzMtYzllZi00MmJmLTkxYzEtYzAwYjU1YWQxOTMwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MSxcbiAgICAgIDE4OSxcbiAgICAgIDgxLFxuICAgICAgMTg1LFxuICAgICAgMyxcbiAgICAgIDE3NyxcbiAgICAgIDEzLFxuICAgICAgNDksXG4gICAgICA1LFxuICAgICAgMTEyLFxuICAgICAgMTY2LFxuICAgICAgMTU5LFxuICAgICAgMjQ4LFxuICAgICAgMTA4LFxuICAgICAgNyxcbiAgICAgIDg1LFxuICAgICAgMTE5LFxuICAgICAgMjMyLFxuICAgICAgMzcsXG4gICAgICA4NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIyLFxuICAgICAgMjgsXG4gICAgICA1MCxcbiAgICAgIDIzOSxcbiAgICAgIDYsXG4gICAgICA4MyxcbiAgICAgIDE1NCxcbiAgICAgIDIxMSxcbiAgICAgIDE1MixcbiAgICAgIDk0LFxuICAgICAgMTUyLFxuICAgICAgMjIyLFxuICAgICAgNzUsXG4gICAgICAxOTcsXG4gICAgICAxODMsXG4gICAgICA0NixcbiAgICAgIDQ2LFxuICAgICAgMTU1LFxuICAgICAgMTkzLFxuICAgICAgMjA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSzI2Z2hVUTFaNld1QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIyYjFkbkVYaFducmFUZlljOUtoOGkybTJ5T3JIdVYzZHkvSFNZNFJRckRrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlZ3VDRnRkF2UVpHYSsrRHFXWTAxUkRUUGhRc0dyVXJVOC9BWURsUExTTFJyTEdleHY1aFNCZ3EwU295bk94U1JJK1JkMDB6b1hMbmdoRFdwUmJTekFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIll4U3djUVBpa3MwOERzTG9UTDlIVTZNTjdHcjUwNlhYbzNmNHRsV241TmM5bjJvS0dJWkNka2dsVEl3RDhKcHd3Tkh5andDMDRlRnFzd0R4RUhVNUJnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE1NTYxMDQzMTozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlNBTUlYLVRFQ0hcIixcbiAgICBcImxpZFwiOiBcIjIwNzEyMDg3MTk4MTA2NDozNEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNTU2MTA0MzE6MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjg0MTc2MjVcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "SamixTech",
  ownername:process.env.OWNER_NAME|| "SamD",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
