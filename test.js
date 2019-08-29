const path = require("path");
const fs = require("fs");


const sidebarGenerate = function(pathName){

  var children = fs.readdirSync(path.resolve(__dirname, pathName)).map(name=>{    
    if(name.indexOf(".md")>-1){
      name = name.split(".")[0];
      return `${pathName}/${name}`
    }else if(name.indexOf(".")=== -1){
      return sidebarGenerate(`${pathName}/` + name)
    }

  }).filter(item=>!!item);

  return ({
      title: `${pathName.slice(pathName.lastIndexOf("/")+1)}`,   // 必要的
      collapsable: true, // 可选的, 默认值是 true,
      sidebarDepth: 1,    // 可选的, 默认值是 1
      children: children
    });
}


var a =sidebarGenerate("./按键精灵")

console.log(a);
