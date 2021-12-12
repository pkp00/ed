const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const optimization = () => {
    const config = {
        splitChunks: {
            chunks: "all",
        }
    };
    if (isProd) {
        config.minimizer = [
            new TerserWebpackPlugin(),
            new OptimizeCssAssetsWebpackPlugin(),
        ];
    }

    return config;
};
const plugins  = () => {
    const base = [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[contenthash].bundle.css",
        }),
        new CleanWebpackPlugin(),
    ]

    return base;
};

module.exports = {
    mode: process.env.NODE_ENV,
    context: path.resolve(__dirname, 'src'),
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    },
    entry: {
        main: './index.js',
        footer: './components/footer/index.js',
        header: './components/header/index.js',
    },
    devtool: isDev ? 'source-map' : false,
    output: {
        filename: "[contenthash].bundle.js",
        path: path.resolve(__dirname, 'public'),
        assetModuleFilename: 'assets/images/[contenthash][ext]',
    },
    optimization: optimization(),
    plugins: plugins(),
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            // {
            //     test: /\.css$/,
            //     use: [MiniCssExtractPlugin.loader, 'css-loader'],
            // },
            {
                test: /\.(scss)$/,
                use: [{
                    // inject CSS to page
                    loader: 'style-loader'
                }, {
                    // translates CSS into CommonJS modules
                    loader: 'css-loader'
                }, {
                    // Run postcss actions
                    loader: 'postcss-loader',
                    options: {
                        // `postcssOptions` is needed for postcss 8.x;
                        // if you use postcss 7.x skip the key
                        postcssOptions: {
                            // postcss plugins, can be exported to postcss.config.js
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    }
                }, {
                    // compiles Sass to CSS
                    loader: 'sass-loader'
                }]
            },
            // {
            //     test: /\.less$/i,
            //     use: [
            //         {
            //             loader: MiniCssExtractPlugin.loader,
            //         },
            //         {
            //             loader: "css-loader",
            //         },
            //         {
            //             loader: "less-loader",
            //             options: {
            //                 lessOptions: {
            //                     strictMath: true,
            //                 },
            //             },
            //         },
            //     ],
            // },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                // loader: {
                //     loader: "babel-loader",
                //     options: {
                //         presets: ['@babel/preset-env'],
                //     }
                // }
            },
            {
                test: /\.(png|jpg|jpeg|svg)$/,
                type: 'asset/resource',
            },
        ]
    }
}