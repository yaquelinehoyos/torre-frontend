module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "./src/CSS/styles.scss";
        `
      }
    }
  },
  publicPath: '/project name/'
};