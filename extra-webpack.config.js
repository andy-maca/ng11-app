const webpack = require('webpack');
module.exports = {
  plugins: [
    new webpack.NormalModuleReplacementPlugin(/(.+)\.component\.ts/,
    function (result) {
      console.log("File:"+result.request)
      console.log("This message can only be see when checking ts file");
    }),
    
    new webpack.NormalModuleReplacementPlugin(/(.+)\.component\.html/,
    function (result) {
      console.log("File:"+result.request)
      console.log("This message can't be seen in ng13, but it can be seen in ng11");
    }),
  ],
};