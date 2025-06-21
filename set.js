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
    session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA61U266jNhT9lcqviSbcCZGOVK65kJB7TkjVBwcccAKYGBNIRvmGPvepv9hPqEjO6YzU6cypVCQkY5u911p77f0ZZAQXyEVX0PsMcoovkKFmya45Aj1glIcDoqANQsgg6IGTZYpll3qGvBv1u3bHDTur+pJ1UnUJz/XQk4RZx3OOyiElL+DeBnm5T3DwnYDevN9PxiUNj2ktSmKw9s/TWazubDkp7K342lobZBFFhbzwX8C9iQgxxVlk5zFKEYWJi64ziOnH4OvupMBYr9N8Ml/Y8xuUbomCxL2pvr5uyC4b8LbvLQpH54Yfg98/Z1thdGLnjVVdfEtwDMy2xWaaCRvmn+1j3Dr1swk5pQ897m1Q4ChD4TBEGcPs+mHdz8YR3Vy0LAJhth1tL5avMpPT+WQNL3un7kwkeyrE3sBaBx8DzsWn+LqYXNjWnZgrqdic42RhHY6rgEiVObkQ87jQlvK2SqWvgc/ou1dO/0X3YiKvsMtkY+nRrrXOozgSO0KyXaXMnpkFZ17iyMnmXpV80DbC0qfK63TPjWZ7vRp06YARqrO6648ZJ3QVWKu3WX7YyCf7C3zISvo9lLXREhUxX2ljrj+uq3nLejWs7iGS4SpjurE/+uly5+/7JPUUjaT9QZ+Ol+OLws0tXR4kQWu5gzuNtPJSOerp+tWmwjGuXh6MTug6DEGPv7cBRREuGIUMk+yxJ2ltAMPLEgUUsYe8IODPjsW5KBxt/BzB2Xl2mnvjHFV9Q13LmllxE3eYTetr5L+ANsgpCVBRoHCAC0bodYKKAkaoAL1fHpVqSFOUEoZGOGzkkyVVEzhJE6Tuz8WnKoasgHn+KUMMtMGBknSCQI/RErXB4weVVzjOUgRddmxL10Sry3GCo+lCl7McSdYaiukz6QqnqGAwzUGPV2VO5nleEu7t/weHaaiCJXGKzouObHUdUVZExZBUQTY1XdScH+CQ77+2QYZq9vRxo77It8EB04KtszJPCAzfTf5+CIOAlBlbXrPAbBaIgt5X24gxnEVFw6zMIA1ifEFmwwP0DjAp0N8FRxSF71zehphJwsaHXXM+8b2RBxrsTaB/aNPjvyFP8rzGCZoi8rLGc7LCq83N5qANMtgEAxbMsutPRkWuP/35x++/vb+NUG8UmowhYhAnRaOwlxWcy1n28BYIxbDf1+1INyMdfKH83kpPq0YySUc7N8Z5eXAWr+N6PhcRGY/rerXd3JYG2eaktbcsp7ZfvhEE9IBdujodRZLZ0o+m2nKGZrI+7ffn7VjkOgN93BocLGXZWqPNbqjF3cXuuO+TQWt11G6VfsJb3nZG3DxaHITFTSo7+V5xkT5/abKF6IID9HWy2/LmkvXUnU6GY1fcOCuy4sTclDf+duCXQYwm1SrVeGWAStoK5ptFtjjqqnhzyO0aTi44Vp1FOowMnHOdKkusOBT28fzZ5I8hk7wNd/zWfvjxecDoMSvfqvLD4j6BNx7k7u2vYrxN33+ZYIY/hSP8uiT+eZ/V6w3urm1PPJvXbrDm+YCLoKPAWVpVdbAA96YZ8gSyA6Ep6AGYhZQ8rENJ2Zh6mB3Id5KZOje0oyfzBBZM/9Io3+g9QXvemlGSD2ARNyJsVPW8blx/1fN8ySB77zugN4/ntcD9LzUAvjyiCAAA',
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
