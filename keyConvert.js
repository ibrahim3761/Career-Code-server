const fs = require('fs');
const key = fs.readFileSync('./firebase-admins-service-key.json','utf-8');
const base64 = Buffer.from(key).toString('base64');
console.log(base64);
