# studentmanage

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



### 路由设计
路径        方法   get参数                    post参数      是否需要登录    备注
/login      POST                             emial、password              处理登录请求
/edit       get   index                                        
/edit       Post                             index                         
/regeister	get   渲染注册页面
/regeister  post                             email、password              处理注册请求
/login      GET   渲染登录页面
/logout     GET   处理退出请求
/delete     post  删除学生数据               学生序号（下标）