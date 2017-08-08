### package.json

## webpack
'''
$ yarn add webpack webpack-dev-server -dev

'''
## babel
'''
$ yarn add babel-core babel-loader babel-preset-es2015
babel-preset-stage-0 babel-preset-react css-loader
style-loader less less-loader html-webpack-plugin -dev

'''
## react
'''
$ yarn add react redux react-redux react-router-dom react-dom -save


'''
## fetch
'''
$ yarn add es6-promise whatwg-fetch -dev

'''
## express

'''
$yarn add express -S

'''
## scripts
'''
"start","webpack-dev-server --port 5000 --open --progress --colors"
"build","webpack -p"
'''
## 目录结构
- components 组件 木偶组件
-containers  页面组件
    -Home
        - subpage 智能组件
        - index.js
-index.js用来控制显示哪一个页面