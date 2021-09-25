module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles.scss";`,
      },
    },
  },
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
