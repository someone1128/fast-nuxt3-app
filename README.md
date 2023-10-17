> 部分内容因误操作消失了，回头完善

# nuxt 脚手架，开箱即用

官网：https://nuxt.com.cn/docs/getting-started/introduction

安装：https://juejin.cn/post/7226651307527618619

博客学习：

- https://juejin.cn/post/7186596767591301177#heading-0

- [Nuxt 3 学习笔记（五）项目结构和自动载入 (Auto Imports) - 掘金 (juejin.cn)](https://juejin.cn/post/7203681024235929655)

- [Nuxt3 - 追光的栗子的专栏 - 掘金 (juejin.cn)](https://juejin.cn/column/7161975142317293604)

- [超完整的Nuxt3踩坑实录，那真是泰裤辣！！ - 掘金 (juejin.cn)](https://juejin.cn/post/7236635191379509308#heading-0)

- [安装 Installation | Nuxt3中文文档 (gitee.io)](https://57code.gitee.io/nuxt3-docs-zh/getting-started/installation.html)

## 集成的库

ts、tailwindcss、useFetch（http请求工具）、less（css预处理器）、day.js（处理时间）、icons（图标库）、pinin+数据持久化存储

国际化切换 i18n 分支

### 配置 src

配置成平常的开发目录

![image-20231016165628359](https://mrxc-1300093961.cos.ap-shanghai.myqcloud.com/ai-images/2023/5/12202310161656435.png)

需要在 nuxt.config.ts 文件配置

## 推荐 tailwindcss 组件

https://www.landingfolio.com/library/all/tailwind

## 集成组件

官方：[Modules · Nuxt --- 模块 ·努克斯特](https://nuxt.com/modules)

### TailwindCss

https://juejin.cn/post/7202526307329310777

```
npm install -D @nuxtjs/tailwindcss
```

### Axios

[nuxtjs-axios|axios中文网 | axios --- nuxtjs-axios|axios中文网 | axios (axios-js.com)](http://www.axios-js.com/zh-cn/docs/nuxtjs-axios.html)

### i18n

https://blog.csdn.net/lxRime/article/details/125868756

```
yarn add @nuxtjs/i18n
//--或
npm install @nuxtjs/i18n
```

### Less

[nuxt3 less-掘金 (juejin.cn)](https://juejin.cn/s/nuxt3 less)

### Day.js（替代 moment）

https://nuxt.com/modules/dayjs

### Pinia

[Nuxt3中引入pinia+数据持久化储存（pinia-plugin-persistedstate） - 掘金 (juejin.cn)](https://juejin.cn/post/7216182763250581564)

## nuxt 基础知识

### 目录说明

[.nuxt/ · Nuxt Directory Structure](https://nuxt.com.cn/docs/guide/directory-structure/nuxt)

```
- .nuxt               // 自动生成的目录，用于展示结果
- node_modules        // 项目依赖包存放目录
- .gitignore          // Git的配置目录，比如一些文件不用Git管理就可以在这个文件中配置
- app.vue             // 项目入口文件，你可以在这里配置路由的出口
- nuxt.config.ts      // nuxt项目的配置文件 ，这个里边可以配置Nuxt项目的方方面面
- package-lock.json   // 锁定安装时包的版本，以保证其他人在 npm install时和你保持一致
- package.json        // 包的配置文件和项目的启动调式命令配置
- README.md           // 项目的说明文件
- tsconfig.json       // TypeScript的配置文件
- pages               // 开发的页面目录
- components          // 组件目录
- assets              // 静态资源目录
- layouts             // 项目布局目录
- middleware          // 中间件目录
- composables         // 代码模块化目录(可复用组合逻辑)
- plugins             // 自定义插件目录
- server              // 服务器目录
- api                 // 自己封装的对外请求 api
```

### nuxt.config.js 配置

```
 1、build：应用依赖第三方模块
 2、cache：该配置项让你开启组件缓存策略以提升渲染性能。
 3、css：该配置项用于定义应用的全局（所有页面均需引用的）样式文件、模块或第三方库。
 4、dev：该配置项用于配置 Nuxt.js 应用是开发还是生产模式。
 5、env：该配置项用于定义应用客户端和服务端的环境变量。
 6、generate：该配置项用于定义每个动态路由的参数，Nuxt.js 依据这些路由配置生成对应目录结构的静态文件。
 7、head：该配置项用于配置应用默认的meta标签。
 8、loading：该配置项用于个性化定制 Nuxt.js 使用的加载组件。
 9、modules：该配置项允许您将Nuxt模块添加到项目中。
 10、modulesDir：该配置项允许您定义Nuxt.js应用程序的node_modules文件夹
 11、plugins：该配置项用于配置那些需要在 根vue.js应用 实例化之前需要运行的 Javascript 插件。
 12、rootDir：该配置项用于配置 Nuxt.js 应用的根目录。
 13、router：该配置项可用于覆盖 Nuxt.js 默认的 vue-router 配置。
 14、srcDir：该配置项用于配置应用的源码目录路径。
 15、transition：该配置项用于个性化配置应用过渡效果属性的默认值。
 官网配置详细说明  https://v3.nuxtjs.org/api/configuration/nuxt-config
```

### 路由

```html
<NuxtPage></NuxtPage> // 相当于路由的出口

<NuxtLink to="/demo1">Demo1.vue</NuxtLink>   // 跳转到demo1.vue页面
```

#### 动态路由

**单参数**

(1) 单参数的传递：单参数的传递只要在页面的文件名中用`[ ]`扩起来就可以了,新建一个页面demo2-[id].vue

```js
js复制代码 - | pages /
--- | index.vue
--- | demo2 - [id].vue
```

使用`[ ]`的形式就可以设置一个页面的传参,参数接收可以使用 `$route.params.id`的形式。

**多参数**
(2) 多参数的传递：如果要传递是两个参数,首先需要建立一个文件夹，然后在文件夹上使用`[ ]`来确定参数，比如我们要传递一个name的参数过来，就需要把目录和文件建立成这样。

```js
js复制代码 - | pages /
--- | index.vue
--- | goods - [name] /
----- | demo2 - [id].vue
```

跳转对应页面传递两个参数

```js
js
复制代码<NuxtLink to="/goods-jspang/demo2-38">Demo2.vue</NuxtLink>
```

#### 嵌套路由

用一句话解释为：目录和文件名同名，就制作了一个嵌套路由。

```js
--pages 
|----parent/ 
|-------child.vue
|-------Two.vue
|----parent.vue
```

```html
<NuxtLink to="/parent/child">/parent/child</NuxtLink>
<NuxtLink to="/parent/two">/parent/two</NuxtLink>
```

### 组件

Nuxt3的所有自定义组件，必须写在`components`目录下，写在这个目录下他会自动加载到页面中。

```js
|components 
----|MyFooter.vue
```

使用组件

```js
<MyFooter />
```

注意：可在布局模板中使用组件

#### 多层级、懒加载组件

其实多层级组件就是把一个组件放在一个文件夹里，如下方目录结构

```js
|components 
----|test 
------|MyButton.vue
```

多层级组件使用

```js
<TestMyButton />
```

#### 组件的懒加载

如果在组件名前面加上`Lazy`前缀，则可以按需懒加载该组件，懒加载组件的目的是在项目打包的时候包更小，可以理解为只有组件显示在页面上时才进行加载， 比如我们现在要做一个文本，这个文本只有在` show`的值为
true的时候才会显示，然后其他时候他不显示。

```js
|components 
----|LazyText.vue
```

### 模块化代码 composab

在开发中我们经常会有一些通用的业务逻辑代码，需要模块化管理，这时候就可以使用`composable` 这个文件夹来编写。

```js
|composable 
----|time.ts
```

页面中使用

```js
//getTime为time.ts中定义的方法名
const time = ref(getTime());
```

注意：`composables` 文件夹的引入规则是，**只有顶层文件才会被引入**

### 数据请求

Nuxt3中提供了四种方法：`useAsyncData` 、`useFetch` 、`useLazyFetch` 、`useLazyAsyncData` ，都是用来获取后台数据的。

#### useAsyncData的使用

```js
//使用useAsyncData时第一个参数给请求起一个名字(为了防止数据冲突)，第二个参数为回调函数

//$fetch()方法是nuxt3提供的内置方法

//lazy:true 就是需要数据都返回后才显示出来，简单说就是会阻塞页面。

//可配置的选项option官网  https://v3.nuxtjs.org/api/composables/use-async-data

const url = "https://api.kuizuo.cn/api/hot";

const res = await useAsyncData("getList", () => $fetch(url), { lazy: true });

//取数据时需写_rawValue，nuxt自动包装了一下

const list = ref(JSON.parse(res.data._rawValue).items);
```

#### useFetch的使用

```js
const res2 = await useFetch(url);

//可传参
const res2 = await useFetch(url, { 
    method: "get",
    id: 1
});
```

`useLazyAsyncData` 和`useLazyFetch` 只是把配置选项中的`Lazy` 设置成了true， 也就是会阻塞页面,用法同上。

### middleware 路由中间件

Nuxt3提供了路由中间件的概念，可以在整个应用使用它，目的是在导航到某一个页面之前，执行一些代码，最常见的路由守卫就可以用这个实现。 下方文件中的`.global`代表这个中间件是全局的，也就是在每次跳转都会执行下面的代码。

```js
--|middleware 
----|default.global.ts
```

```javascript
export default defineNuxtRouteMiddleware((to, from) => { 
    console.log("要去那个页面:"+to.path) 
    console.log("来自那个页面:"+from.path) 
})
```

### 只对一个页面起作用

如果只想中间件对一个特殊页面起作用，去掉`.global`的后缀就可以。

```js
--|middleware 
----|default.ts
```

这时候它对任何页面都是不起作用的，需要再去对应的页面里注册一下，代码如下。

```html
<template> 
    <div class="">Demo7 Page</div> 
</template> 

<script setup> 
    definePageMeta({ 
        middleware: ["default"], 
    });
</script>
```

### SEO 配置

使用Nuxt3框架解决的主要问题就是要对搜索引擎友好，搜索引擎可以搜到想要的东西要归功于HTML中的`Mate`标签和`title` 标签。

#### title 和 meta 标签的作用

**title标签**：主要是为了告诉搜索引擎网站标题是什么，然后搜索引擎才会根据你提供的的title给你打上tag，用户在搜索的时候才会搜索到你。 **meta标签**
：这个标签根据name的不同有很多种，和SEO相关的主要是`name=description` 和`name=keywords` 这两种，如果不设置这两个标签，对SEO的效果就会有所影响。
所以我们在开发需要SEO的网站时，对这两个标签一定要进行设置。

#### 设置 userHead、useMeta

Nuxt3中提供了 `useHead`方法来设置SEO需要的内容，用它可以设置HTML中Head的全部内容，包括meta标签的内容。

```html
// 具体页面
<script setup> 
useHead({ 
    title: " 测试网站", 
    viewport: "width=device-width,initial-scale=1,maximum-scale=1 ", 
    charset: "utf-8", 
    meta: [ 
   	 { name: "description", content: "前端技术" }, 
   	 { name: "keywords", content: "测试" }, 
    ], 
}); 
</script>
```

```json
// 这里配置的是全局的
// nuxt.config.ts 
app: {
    head: {
      title: '项目名称',
      meta: [],
      script: [],
      link: [],
      style: []
    }
  },
```

### 打包

```
# 生成用于服务器端运行的优化代码
npm run build

# 生成静态网站，将应用程序预渲染成静态 HTML 文件，无需服务器端渲染
npm run generate
```

## Pinia

https://nuxt.com/modules/pinia

[Nuxt3中引入pinia+数据持久化储存（pinia-plugin-persistedstate） - 掘金 (juejin.cn)](https://juejin.cn/post/7216182763250581564)

### 数据持久化：pinia-plugin-unistorage

https://prazdevs.github.io/pinia-plugin-persistedstate/zh/frameworks/nuxt-3.html

使用状态管理时，有时我们会有这样的需求，需要将状态管理的数据存储到本地缓存中，在页面刷新，或者下一次访问时依然生效，`uniapp`提供了`uni.setStorageSync()`
方法支持各个平台将数据存在本地，单如果需要时每一个单独加不便于管理，这个时候可以使用持久化的缓存插件，会自动把`pinia`配置的数据存到本地

