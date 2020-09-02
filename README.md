## 项目流程

- 项目初始化

1. create-react-app 脚手架生成初始目录
2. 添加 eslint+husky+prettier+lint-staged 来统一前端代码风格
3. 使用 react-app-rewired + customize-cra 来修改webpack配置
3. 界面 ui(antd),配置式路由(react-router v4),全局状态管理(react-redux)
3.1 界面布局遇到的问题
    - 引入less
        1. npm run eject 暴露配置添加less-loader
        2. customize-cra 中的addLessLoader方法
            > 不同less-loader版本写法不一致
    - antd 的按需加载
    -
