// webpack.config.js
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const path = require('path');
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    entry: "./src/index.js", // webpack 최초 진입점(엔트리 포인트) 파일 경로를 설정합니다.
    output: {
        // webpack을 실행한 후의 결과물의 이름/경로 등을 설정합니다.
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html", // 번들링 파일을 주입하여 번들링 폴더로 복사할 대상 HTML 파일을 설정합니다.
        }),
    ],
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: ["@svgr/webpack"],
            },
        ],
    },
    devServer: {
        // webpack-dev-server 옵션을 설정합니다.
        static: path.resolve(__dirname, "dist"),
        historyApiFallback: true, // 404 페이지 대신 index.html로 이동합니다.
        hot: true, // 모듈 전체를 다시 로드하지 않고 변경된 사항만 갱신합니다.
    },
    resolve: {
        // resolve: import를 할 때 확장자를 생략할 수 있습니다.
        extensions: [".jsx", ".js"],
    },
};
