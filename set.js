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
    session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA61U247iRhD9lVW/ghYb35FGim+AwQPmZmCiPDR2Yzf4hrttbK/4hjznKb+YT4gMM9mRdrM7kWLJUru7XXVO1Tn1BSQpJmiKajD4ArIcl5CidknrDIEB0IrjEeWgC3xIIRiAQjXXPY8E6uVw3WmFfnHNJH5xDAW6HegKokHFQxNZus7IT+DWBVlxiLD3g4AudAKOZXi7GPVYp4OoB4NsJS1KQYvQ2ibj68tiAxmncZkncGsjQpzjJDCzEMUoh9EU1Q7E+cfge7MksqLzhL7gicLTeRMvg97Z0ucGrKWFGxsVtJZa6Y8462PwR8GJdpYZh0znSoZ2Z7yYJ3v/vJ3wxxF76hRqkzjnsbkebuQHfIKDBPmWjxKKaf3hui8sc9HbGZDu9WgeLk9OrFvCXrwk2ZUtLtI07iBxWNi80Tc/Bjw8pVOVXPfmXJoYC2tWWS+JwYRcWc9W3NZKTIUth5cLLuvze+BO/qaV83+p+0a3jvx1mXGM6k64pSNRpLI7ETkClOekTBiRBnveLYwt8zH48irejs7W/DCJHJlj+ko5zcelPS6ceuIjcxxYHYY7lGJTka/wIS3yH6GUOpLIjknPptmyWTQNO1kuHX9fhWd7d9xK8qlczqfhhDqcHxbPp7GUY1jnTlCTrZDudhequT27WegF3xT2qZPb1JTDxdOd0RnVlg8G7K0LchRgQnNIcZq0e31G7gLolyvk5YjeywtUW6SR3G9Co0p5MjsKej+9NJMtqhBen8JlmW/EhRtOxjZ5Al2Q5amHCEH+GBOa5vUzIgQGiIDBr/dOtaRzFKcUTbAPBqAv8JLSZ3ilz8u/kM/XEFICs+xzgijogmOexs8IDGheoC64/8ByhiFKrKFIoiqa0tBQZFE1hromDWVeZYyWYvxIusYxIhTGGRiwEi9LiiCJ7K37/+DgRUlhGEEXdF1l+gbXlwyZMXiD5zlFYDjpJzj6t9+6IEEVfei4rT7HdsER54RukiKLUui/ifztEHpeWiR0VSee3i5QDgbvthGlOAlIy6xIYO6FuER6ywMMjjAi6J+Goxz5b1xeh5ie+q0OdWGtT+XnIWixt4G+qc2A7X9bnuhxjekrIscKCssIIiu1N9uDLkhgGwwYMEnqT9o1rT/99ecfv7+9baFeKbQZfUQhjkgLZrYmzJQxzGdRl4k5GqlmoOqBCr5SfrPSQ6qBkMaTl2mIs+I4XG7tarHgUGrbVbXeuc1KS3dZ2jkYxrAyn74TBAzAcWo6Vm+NqW2vMrdv8V49263IMz+LydGvd67NTfeiVx+0UdlLGEFZsduFr3fyXTW86Jw+1ibp6bAhjLE+97TONpqJB631XRf4qMQeep9MTqlY8siU+L6bnxQtf4n3K4QPYZisBXE0kqJ61YnXy01I982hxs1uV9uHIqqiilHYs2Y0e3mjr4Umlfd7Rim8kGSn68Pk9yETvQ53/Go/fP88YnSfla9d+WlzH8BbDTK37rsYr9P3XyaYtp/DCd6u0v3lkFQbF8sbc8Zd9Fr2NizrMQEcitCJr9fKW4Jba4YsgvSY5jEYAJj4eXqXTp4Wrait5Jj+IJmuMpYZPJhHkFD1q1G+4z2efdxy8jQbQxK2RXAl6bJpVV+rWbaikL75Dqjto3kOuP0NUYG7saIIAAA=',
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
    MODE: process.env.PUBLIC_MODE || "yes",              
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
