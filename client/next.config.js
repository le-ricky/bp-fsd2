const withCSS = require(@zeit/next-css);


module.exports = withCSS({
  reactStrictMode: true,
  publicRuntimeConfig: {
    APP_NAME: 'bp-test',
    API: 'http://localhost:8000/api',
    PRODUCTION: false,
    DOMAIN: 'http://localhost:3000'
  }
})
