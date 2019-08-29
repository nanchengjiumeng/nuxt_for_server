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

module.exports = config => {
  // console.log(config);

  return {
    description: "Just playing around",
    palette: path.resolve(__dirname, './palette.styl'),
    themeConfig: {
      sidebar:{ 
        // "/按键精灵/":[
        //   {
        //     title: '插件命令',   // 必要的
        //     path: '插件命令/办公文档',      // 可选的, 应该是一个绝对路径
        //     collapsable: true, // 可选的, 默认值是 true,
        //     sidebarDepth: 1,    // 可选的, 默认值是 1
        //     children: [
        //       {
        //         title: '插件命令',   // 必要的
        //         path: '插件命令/办公文档',      // 可选的, 应该是一个绝对路径
        //         collapsable: true, // 可选的, 默认值是 true,
        //         sidebarDepth: 1,    // 可选的, 默认值是 1
        //         children: [
        //             "插件命令/办公文档"
        //         ]
        //       },
        //     ]
        //   },
           
        //     "插件命令/办公文档",
        //     "插件命令/窗口"
            
          
        // ]
        "/按键精灵/":[sidebarGenerate("../按键精灵")]
      //   // "/大漠/":sidebarGenerate("按键精灵")
      }
    }
  };
};
