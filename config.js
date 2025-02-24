const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUW5OqOBj8L3nVOXJT1KqpWuTiFRWQo7i1DwECRORiCChM+d+30Jma2a06Z2ffUoF0Ot399RtIM1ygJarB+A3kBFeQonZJ6xyBMZiUQYAI6AIfUgjGoJ4Jm8554laJsdQUW5CGvsQVrFiYi3QdsRIrTY99xVMWWvgK7l2Ql+4Ze78BlDe6URkbm+NpU/HqdE0WF1+gXAePrpp9vOQQNdvDhDmz9iu4t4gQE5yGah6hBBF4XqJ6CzH5Hn0kY33S59ieKVcb1O8lmdUTQ5RcIrfjMHFiV5rOM+vLZf9N+pKXJJTSmkiomTrbgCkXs54W0YW3wMN8SNYXU+kZhrVpnCf9Aocp8uc+Simm9bd192aNvJWzpoHmSNyPLvY1jfX5bsfIc3Vwqk8bZhitpJkw5IvvEe/LE6vssdPsGAjGNURsnfsTbbi7DHC/aNazrDwdBL/2ytM/iG/JR1bi/6P7dbsx7NhSjZEr2dpPBW3q+IbpBSlMaXA9TWeuHcxQnKre9+iHkatptm4qq5Eg9i1PMRdrgz+mnZ2WN/LsyIhTO+zrh2NqfNKHtCS/YxmuEsw5rLVhlYN1HKh+WIfLOjsFceZ2FHWCmfmCWe8vznYz3+7mM1fnVTa2zD51y6mpytSXPcymZoeXrutbsI80bCrh6+NFMarnPhiz9y4gKMQFJZDiLG33BmIXQL+ykEcQfagLItIkJ2ifvChjKnm3305g4fysJH5qOioyV1fduYkLOZmY8SvogpxkHioK5M9wQTNS66goYIgKMP7zry5I0Y0+fWtv49kuCDApqJ2W+TmD/oepHx+h52VlSq069eR2gQgYM5/biFKchkUrY5lC4kW4QnIEaQHGATwX6N4FPqqwh1o84HMHm4bksDOTZGZiM95oJQxbylGWPn8RfJcPeBe+jBjIvwgiZF5GELovMHAZbsR5HMMPQBfg95Fpz/zSwX3DVY6CmCCgBPUCX3fDS+W6C8UyHi48pUcE+WBMSYm6wIVeXOa7LEbpb3CTWXZhcq5we9XtWmBvj6v8pO9mZG5/wX1aCsZvnzUlZ36Ld5iuRFYXDNAFySOBuH35SBBFgR+JbF8cC/0/ih/XVkeY5z9SRFvYd83bAz6iEJ+LtjFXJ4cpJVVdWfHQZaZTSQ8lOZTAp0cfWX+GSU8HJBpuZJZfXN1jJ78t4s75RD3uKmNH3SFuqUF847Vz8gjTv0HAGHSGTvmTMXqBpQZGHpXh8JSx9cRuFKPMboK67nHo7McNtw6Xy0MjZaxZdTq4CfhQcy2T2LpaRiNTuN147HWQEJ2DetIOxkdWvl52dU8LkQ7gwSN8xpwmrHPy98KWJcnRX15jZji8WRChfOsQR6uKZtrhDs5mj0c7PDquJgMcK9uiXi/QUpOW2yITQs6Xrs8pfLTA+b198WNA3t6TFWD0KLMUtg79hzdfM87cu18g3tvxFzma7BadixAoIfVrb8oFF886bnNHPKwLKUsmKk9xtM8K/3Y85uB+/6sL8jOkQUYSMAYw9UmGfdAFZ1hQ6XNMdzhBBYVJDsasKDD8qM+I/P1vlLortdsHAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

