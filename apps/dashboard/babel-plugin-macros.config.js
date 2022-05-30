// Thanks https://github.com/angelmtztrc/cra-template-tailwindcss-styled/blob/master/template/babel-plugin-macros.config.js
// if you need a Theme Provider
module.exports = {
  twin: {
    config: 'tailwind.config.js',
    preset: 'emotion',
    dataTwProp: true,
    debugPlugins: false,
    debug: false,
  },
};
