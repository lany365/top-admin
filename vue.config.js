module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://api-toutiao-web.itheima.net',
                // target: 'http://ttapi.research.itcast.cn/',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api/': ''
                }
            }
        }
    },
    // 基本路径 baseURL已经过时
    publicPath: './',
    assetsDir: 'static',
    parallel: false,
    lintOnSave: false
}
