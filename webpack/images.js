module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.(jpg|png|svg|JPG)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'image/[name].[ext]'
                    }
                }
            ]
        }
    }
};