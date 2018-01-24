# 这是一个没有什么用的项目说明
--------------
## 兼容IE是不可就能的，这辈子都不可能兼容IE
不写hack 不加polifill 不写Autoprefixer 简直像回到家一样 


所有库都用最新版本 react 16 ,webpack 3.10，......   

单页面应用，所有数据都从接口动态的获取
用户状态都放在session 每次载入先看状态 仔锕去拿相应的东西      
代码按需加载   
布局使用 grid + flex   



把react,redux,react-router 这些每个模块都要用的东西提取出来  放进vendor.hash.js 里   
模块自身代码在 name.hash.js里

使用ESlint,不加分号！   
制定代码规约（airbnb react???）





















- `devtool: 'source-map'`, 用来输出sourceMap 生产环境要记得去掉






