const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: 'hhttps://jalatra.com/apivaccinify/14-kabupaten-purwakarta',
  }
})