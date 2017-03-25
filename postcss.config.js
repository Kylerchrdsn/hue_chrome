module.exports = {
  plugins: [
    require('postcss-nested')(),
    require('postcss-smart-import')(),
    require('autoprefixer')()
  ]
}
