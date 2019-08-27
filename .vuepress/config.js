const path = require("path");
module.exports = config => {
  // console.log(config);

  return {
    description: "Just playing around",
    palette: path.resolve(__dirname, './palette.styl'),
    themeConfig: {
    //   search: false,
    //   navbar: false,
      sidebar: {
        '/大漠/': [
            "Foobar"
          ],
      }
    }
  };
};
