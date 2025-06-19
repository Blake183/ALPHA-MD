const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined 
    ? databasePath 
    : process.env.DATABASE_URL;


const config = {
    session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA61W266iSBT9lU69alouAmJykuEq4F3E22QeSigQ5WZRINjxG/p5nuYX5xMm6HH6JN1z+kzSJCRQVey91q69VvEFJGmYoyGqQf8LyHBYQoKaR1JnCPSBXPg+wqANPEgg6ANFp1haPvs1E8n+8BTkvXOHTa3ZdgPVyZTXjbrTGY7JlmjUC7i1QVbso9B9JyBnxS0GR4tKp3X6ujYXAxvPS1rgRw5ToUlprLYa3+LyQHFfwK2JCEMcJoGWHVCMMIyGqJ7BEH8MPjOTBex6Zt1KiEiIbphrWo3zZaDskpO62A+i43QwmAtOlH8MvlNaVLAbSicxgXI5X1Kdej8cs+nObAXTNUcVCsvBacR2tMsDfh4GCfJMDyUkJPWH686ba7SJA9IJcCVRhmzql0lgTgupojIx3CccNtAuUaJVPP8Y8BkZTdh8IzrpuBxkLa+WrJHBtpbeJJh3EcXxnq/7RFW0y+kt8Bl+9srp/9Td0S4dqpJSO0+Ga/lQ9+qEr0itR8bMPm5FzlWV7pD4FzY+fQw+lAdbfjkusXdmrJE4mg5lxbboDurilbHRB+PrpTNaryaHFfUNPiQFfg/l2ZzZY3MwZEaFsbu2ui2sjUtlNnKX82MWu0s0v1abWaCXYmCtVlCwhKV9YCw7ptOi1Qk9fii1MGvTEXUgCzLm/P1ePFxe7oxOqDY90KdvbYBREOYEQxKmyX2MEtoAeqWNXIzIvbzgZB5kvlfsZGHn0KxY+PkUmkF1sku9OLam6mrq2KExSWC0fQFtkOHURXmOPCPMSYrrMcpzGKAc9H+/71RDGqM4JcgKvUYHXFcQGaorMt3eb/nnywGSHGbZ5wQR0AY+TuMxAn2CC9QG9w84tavTDNdTGY3lOJrhGJVjFImWRVbjREFpKMaPpMswRjmBcQb6tMBRLEsxIn1r/xocKicKgkZRGiPzAi0JtKYIAi0qlCIyPZF5HwdLCb8KB8erAiVIvR7PyoqkSrTEsioj0TIn0awm9H6Co3f7ow0SVJGHnpouYOk28EOcEycpsiiF3lNsz0noummRELtOXKV5QBj03wwjQsIkyBtmRQKxewhLpDQ8QN+HUY7+bTyEkffk8mqmSuo1euAnE1tUxwposDeBvqtNnxa+L0/0WEYxIs/SnEhTHE8Lzcpmog0S2AQDKkyS+pN8SetPf//159fn3RTqlUKT0UMEhlHenDSTY04NKVWzlptrzxwMJC2QlEAC3yg/Jf2QTMClsbUbHsKs8PXFelTN5yxKR6OqWm5WV1tON1na2quqXmkvPwgC+gBdBKtcD7ViysmLQDZmTHqU52e3dnR+FiyO8wTPR6QgiF0VMEpxxqiHNJ673SSKu8ThhqeC34qSuLOY2lO1k3CSiSy9NNk8VIYueptM0YrUjwg/Md3SiHy10PSuqzt2vIs0Q2vBfauaW5Wdp9fZcaxKuFeWJp1hn6DoIDP+Va5x1+N6sLiwG0o7DQ7Soniazd3sotdDJny1gfD+6ofo7tmvu/LTzX0Ab3qQurXfxHg9Bf7DSeXtFFrh2k63531SOauw52gT9qzUPdehaZcKoM7DWXy5VO4C3BoxZBEkforjxtsTD6f31sFp0TS1mfjpe/8kEmVqwYN5BHMifRPKD7xI6D5WzXCaGTA/NEVYCcLZabq+lrLMJpA8dQek5hpfTHD7B1VMnkgqCQAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Keith",
    NUMERO_OWNER: process.env.NUMERO_OWNER || "254743995989",     
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',    
    URL: process.env.URL || "https://files.catbox.moe/6hd2t7.jpg",                         
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'no', 
    GCF: process.env.GROUP_CONTROL || 'no',     
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || 'viewed by alpha',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'no',  
    ANTICALL_MSG: process.env.ANTICALL_MSG || 'call declined',             
    GURL: process.env.GURL || "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47",
    EVENTS: process.env.EVENTS || "yes",    
    BOT: process.env.BOT_NAME || 'ALPHA_MD',
    MODE: process.env.PUBLIC_MODE || "no",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Nairobi", 
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    DP: process.env.STARTING_BOT_MESSAGE || "yes",
    ADM: process.env.ANTI_DELETE_MESSAGE || 'no',
    
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? new Sequelize({
            dialect: 'sqlite',
            storage: DATABASE_URL,
            logging: false,
        })
        : new Sequelize(DATABASE_URL, {
            dialect: 'postgres',
            ssl: true,
            protocol: 'postgres',
            dialectOptions: {
                native: true,
                ssl: { 
                    require: true, 
                    rejectUnauthorized: false 
                },
            },
            logging: false,
        })
};


let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

module.exports = config;
