const path = require("path");
const fs = require("fs");


const sidebarGenerate = function(pathName){
  var children = fs.readdirSync(`./${pathName}`).map(name=>{
    name = name.split(".")[0];
    return `/${pathName}/` + name
  })
  return [
    {
      title: `${pathName}`,   // 必要的
      collapsable: true, // 可选的, 默认值是 true,
      sidebarDepth: 1,    // 可选的, 默认值是 1
      children: children
    },
  ]
}

module.exports = config => {
  // console.log(config);

  return {
    description: "Just playing around",
    palette: path.resolve(__dirname, './palette.styl'),
    themeConfig: {
      sidebar:{ 
        "/按键精灵/":sidebarGenerate("按键精灵")
        // "/大漠/":sidebarGenerate("按键精灵")
      }
    }
  };
};
