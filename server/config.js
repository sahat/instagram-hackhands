module.exports = {
  db: process.env.db || 'localhost',
  clientSecret: process.env.clientSecret || '46d6cc16b2fa445595e747a3349cb6e4',
  tokenSecret: process.env.tokenSecret || 'pick a hard to guess string'
};