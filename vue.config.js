const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "bootstrap/scss/_functions";
          @import "bootstrap/scss/mixins/_breakpoints.scss";
          @import '@/assets/css/vendor/bootstrap/bootstrap_variables.scss';
          @import '@/assets/css/application/variables.scss';
        `,
      },
    },
  },
});
