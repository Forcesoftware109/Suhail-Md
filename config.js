const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254724265444";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_23_08_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUzLFxuICAgICAgICA2NixcbiAgICAgICAgMTczLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyLFxuICAgICAgICA5MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODksXG4gICAgICAgIDEyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzksXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzIsXG4gICAgICAgIDcsXG4gICAgICAgIDQzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOCxcbiAgICAgICAgMTY4LFxuICAgICAgICA4LFxuICAgICAgICAxMixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTgwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTk2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI0LFxuICAgICAgICA1NyxcbiAgICAgICAgMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjAxLFxuICAgICAgICA0NixcbiAgICAgICAgMjEzLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDg3LFxuICAgICAgICA4NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA3MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDksXG4gICAgICAgIDU4LFxuICAgICAgICA3MixcbiAgICAgICAgODgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAzNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM1LFxuICAgICAgICAxMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDg2LFxuICAgICAgICAzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDksXG4gICAgICAgIDY0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDU2LFxuICAgICAgICAzMCxcbiAgICAgICAgMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDExNixcbiAgICAgICAgOTAsXG4gICAgICAgIDM0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTc3LFxuICAgICAgICA1NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA3LFxuICAgICAgICA0LFxuICAgICAgICAyMDksXG4gICAgICAgIDM1LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0LFxuICAgICAgICA1MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJSbEJPaDFCOXF4NlBjdE9NaENESlhnbUEzdEJPbHVpdFhzaWpYajB2ejRnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDExMTYxMTA3NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDIwNkNDNTY2NjY3RUIwMkUwMTg3REVGMzAyOTFDQURcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyODg1ODI5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlhjMWpFb3JsVHNpaXF6OWotNDZFeHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjQxYzg1NTYtMTZkMy00YzY4LWI5YjYtOTg1Nzk5YjBjN2U0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MyxcbiAgICAgIDE2OCxcbiAgICAgIDE4MCxcbiAgICAgIDgzLFxuICAgICAgMTYwLFxuICAgICAgMjEzLFxuICAgICAgMjQ0LFxuICAgICAgNSxcbiAgICAgIDEzOCxcbiAgICAgIDk5LFxuICAgICAgMjExLFxuICAgICAgNTUsXG4gICAgICAyMjcsXG4gICAgICAxMzksXG4gICAgICAyMTAsXG4gICAgICAxNzAsXG4gICAgICAyMjMsXG4gICAgICAyNDAsXG4gICAgICAxMjYsXG4gICAgICAyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTgsXG4gICAgICAxNTAsXG4gICAgICA5NCxcbiAgICAgIDIwNCxcbiAgICAgIDgxLFxuICAgICAgMTAyLFxuICAgICAgNDgsXG4gICAgICAyMjEsXG4gICAgICAzOCxcbiAgICAgIDEyMyxcbiAgICAgIDE2MCxcbiAgICAgIDIxMSxcbiAgICAgIDI0NixcbiAgICAgIDE5MSxcbiAgICAgIDcxLFxuICAgICAgMTM2LFxuICAgICAgMTAwLFxuICAgICAgMTcxLFxuICAgICAgMSxcbiAgICAgIDQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjJMWVRSWFJDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQxMTE2MTEwNzQ6NDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzODEyMjA3MTM4ODQxMDo0NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLTGtvNWNHRUxqTnhMVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjA1bytQK2dqc1JVU3hKM0ZXZjViMnlnVmVaemhCRmwzTzhoV001di83aTg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWmJReUtaamVGQlA0ZVQzRERlcUhkVDd3aFpQRGUxR2hrSnBCYXBnOTQ3eU1qMndxN2hzREdRMGJmQit0eWwwNHFNYVNoZis0T2t4dFVlMVdTb1RvQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWmJ5ek41dFNjcG0xd3EzQzBYR0FzbkJ5ZzhxemtHVzRZNjIxbGU1OGw2RWIxa0pHeHc3SzZ6bERuZjhaQ0lyRTNHQWtvclY4THE3RTJXUlBXRGtRRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0MTExNjExMDc0OjQ1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDQ3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI4ODU4MjMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIb1NcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhvUy5qc29uIjogIntcImtleURhdGFcIjpcImVGcUtMTUYvK3JUQ3ZRZG9lMVpSNUc2U1N4K3ZMNFEweXNvWkQ5Wk5NMFE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY1OTQzMzUwNSxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSw0LDVdfSxcInRpbWVzdGFtcFwiOlwiMTcxODkwMzAxNDA1NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Kevoh",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
