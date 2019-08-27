const fs = require("fs");
var res = fs.readdirSync('./按键精灵')
res = res.map(name=>name.split('.')[0]);
console.log(res);
