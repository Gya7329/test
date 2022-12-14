const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/v1", {
      target: "https://apiv2.shiprocket.in/",
      secure: "false",
      logLevel: "debug",
      changeOrigin: true,
      pathRewrite: { "'^/v1/": "/" },
    })
  );
};
