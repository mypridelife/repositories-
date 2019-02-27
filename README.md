# your-repositories

前后端分离使用 Token 登录解决方案

> 技术栈：vue+vuex+vux+axios

 一个项目学会vue全家桶+axios实现登录、拦截、登出功能，以及利用axios的http拦截器拦截请求和响应。

## 前言

该项目是利用了Github 提供的personal token作为登录token，通过token访问你的Repository List。通过这个项目学习如何实现一个前端项目中所需要的
登录及拦截、登出、token失效的拦截及对应 axios 拦截器的使用。

准备

你需要先生成自己的 Github Personal Token。
Token 生成后 访问demo，即可查看你的Repository List。

## 项目结构

```
├─build
├─config
├─src
│  ├─api
│  ├─assets
│  │  └─common
│  │      └─css
│  ├─components
│  │  └─CountTo
│  ├─router
│  ├─store
│  ├─utils
│  └─views
│      ├─demo
│      ├─index
│      ├─login
│      └─user
└─static
```

### 技术栈

 Vue + vue-router + vuex + axios

### 登录拦截逻辑

#### 第一步：路由拦截

首先在定义路由的时候就需要多添加一个自定义字段`requireAuth`，用于判断该路由的访问是否需要登录。如果用户已经登录，则顺利进入路由，
否则就进入登录页面。

```javascript
const routes = [
    {
        path '',
        name '',
        component Index
    },
    {
        path 'repository',
        name 'repository',
        meta {
            requireAuth true,   添加该字段，表示进入这个路由是需要登录的
        },
        component Repository
    },
    {
        path 'login',
        name 'login',
        component Login
    }
];
```

定义完路由后，我们主要是利用`vue-router`提供的钩子函数`beforeEach()`对路由进行判断。

```javascript
router.beforeEach((to, from, next) = {
    if (to.meta.requireAuth) {   判断该路由是否需要登录权限
        if (store.state.token) {   通过vuex state获取当前的token是否存在
            next();
        }
        else {
            next({
                path 'login',
                query {redirect to.fullPath}   将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next();
    }
})
```

#### 第二步：拦截器

完整的方法见utils/http.js

通过上面这两步，就可以在前端实现登录拦截了。`登出`功能也就很简单，只需要把当前token清除，再跳转到首页即可。

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8000
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 附：封装一个组件

安装 countup.js

```
$ npm install countup.js
$ npm run dev
```

组件位置：@/components/CountTo/index.vue
使用：@/views/demo/demo-count.vue