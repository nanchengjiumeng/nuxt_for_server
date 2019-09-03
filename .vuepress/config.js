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
    title: "按键系列文档",
    head: [
      ['link', { rel: 'icon', href: 'https://official-web.oss-cn-beijing.aliyuncs.com/active/Opencard/cant_click.png' }]
    ],
    description: "Just playing around",
    palette: path.resolve(__dirname, './palette.styl'),
    themeConfig: {
      nav: [
        { text: '按键精灵', link: '/按键精灵/按键精灵基本命令/事件子程序.html#onscriptexit-脚本停止事件子程序' },
      ],
      sidebar:{ 
        "/按键精灵/":[sidebarGenerate("../按键精灵")]
      }
    }
  };
};
