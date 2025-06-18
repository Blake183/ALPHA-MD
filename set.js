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
    session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA61VWY7jNhC9yoC/NsbaJRtoIFq927Isr0E+aImSaGsztXvgM+Q7X7lijhDI7s4MMJNOBxgBAiiSqnqvWO/xC4gTnKEpasDgC0gJLmGO2mHepAgMgFJ4HiKgC1yYQzAABw01xTwNs4CEN7aSgmvc6fBZAv2Dqp2xJ06QG/JOh2H1F3DvgrQ4hdh5JyB3MPYJUcSJ6UHZsqfSKJ4Vk+iqn9KlqFSxrhzQYUpGxubyAu5tRIgJjn09DVCECAynqDEhJh+DL4+NutHQhbkQvHdNeYGXayk+WDZmCXPyzjeSSHAD/e3G+Rh8cdnrlCrWlF4UJaVdXeERa0G+smaNgI/XzsRLNcs91qjhnvAz7MfIHbsoznHefLjuzmxaHFyrc6bXm+XG2St9H83MSUfYBeKxXluZfB0i4vqhIX8MODUzpZ7tz02hOum3RjriRGJPmrRKbtGE7nm2xmzP9siMGedb4CZ565XL/6n7YaRdeA71Tc824e4yllytucCFT3OEWR7DSqSHSijvJIPKPgbfP7KJp4ppQNazNV4n6nVlbtzTreC0ehJS/f5C9KYH2Aur7Ct8mBfkPZTqbDx0yjydh4upGW+p4bmZnBepJ3VEM7wOe2ONSf3yxHKMX2b7XhHtiHjymXlUVHIgxsqlN3YzWTkYB46bWwFUOkP2XL08GF1QM3bBgL53AUE+znICc5zEjzme6QLolmvkEJQ/ygvKaMbP/ZpaM6uUqaO5N/VrK55dysnOhIJuFEv1HFH2RM/lF9AFKUkclGXIHeEsT0gzR1kGfZSBwa+Pk2pJExQlOZpgFwwAw3Nin6G4PsNJv2SfqwDmGUzTzzHKQRd4JInmCAxyUqAuePwgMaJAC33R4Pm+KDAKzXCKrigsTSm8RMlCSzF6JrVxhLIcRikY0CJPMRzPC9K9+3NwULJCy7rKcRSr0hpLy3KfEQVZExXZkHhdfR+HyPwsHIJM9TlKNjSKMgSNkQzW4ChZ42RVlRiaYt7FIVDc/bcuiFGdP/XUdgFLd4GHSZZv4iINE+i+ie1tETpOUsT5uokdtR0gAgbfTKM8x7GftcyKGBInwCVSWx5g4MEwQ/80HiLIfePyaqZq4rZ66FvcSNMtA7TY20Df1WZA89+XJ3xuo5i+wNJ8n6Z4gRbbne1CF8SwDQY0GMfNJ6VKmk9//fnH729vW6hXCm1GF+UQh1krxsUpo6aUpk89pcnGw6Gs+7Lqy+Ar5TdJPyXj80k0OU4DnBaeYe1m9WrFomQ2q2t7v72tlWSfJp2Tphm1/vKDIGAAVsKE2Y6LW1mytJLO7OZKFv29eEEjvtMkJCvwhMI9shWxLdhbJC2znrTsbVGQ5ke4Z1G62SdaaansLPA6K2tvXWtVafXfBS4qsYO+TZYtN1eL8ZVOvTiNs3Wlhdqa3xMansKimbJ6wJZUIxeLGyptvtnZdnWbl8IiwaeUqdDldjB3O2Z9zc4HqnekyF6JfDmQn2bzMLvw9ZLBrzaAH58eRg/Pfj2V/zzcJ/C2B6l795sYr7fAvzipcljCCd6tk8P1FNebLZY2+oK9qo3kbGjaoXxoCNCMqqp2LHBvxZCGMPcSEoEBgLFLkkfrkKRom3oce8l7ti1TY91/Mg9hlstfhfIDD+CF5y6TJOkIZkFbhK0oXjdt1zdymq5zmL/pDsjtM690cP8b3BE9VyoJAAA=',
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
