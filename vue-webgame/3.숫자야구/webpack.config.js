const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');
// 웹팩에 대한 설정 => 스크립트를 합치기 위해

module.exports={ 
    //여러개의 스크립트중에 대표가 되는 스크립트
    entry:{
        app: path.join(__dirname, 'main.js'),
    },
    //
    module:{
        rules:[{
            test:/\.vue$/,
            use: 'vue-loader',
        }],
    },
    plugins:[
        new VueLoaderPlugin(),
    ],
    output:{
         filename: '[name].js',
         path: path.join(__dirname, 'dist'),
    },
};