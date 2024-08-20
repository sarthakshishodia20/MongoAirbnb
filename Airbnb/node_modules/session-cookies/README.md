# session-cookies

    session-cookies is localStorage、sessionStorage、Cookies。


 <a href="https://badge.fury.io/js/session-cookies"><img src="https://badge.fury.io/js/session-cookies.svg" /></a>
 [![npm downloads](https://img.shields.io/npm/dm/session-cookies.svg)](https://www.npmjs.com/package/session-cookies)


session-cookies This plugin is used to summarize the browser's three caches localStorage, sessionStorage, Cookies.The plugin is designed to be quick and easy to use. Below is a summary of some apis.

session-cookies 这个插件是用来汇总浏览器的三个缓存 localStorage、sessionStorage、Cookies。该插件注重使用方便快捷下面是一些API汇总说明。

#### API 

|  名称   |       获取所有       |     获取单个      |     设置单个      |       移除单个       |      清除所有       |
| :-----: | :------------------: | :---------------: | :---------------: | :------------------: | :-----------------: |
| cookies |    getCookieList     |     getCookie     |     setCookie     |     removeCookie     |     clearCookie     |
| session | getAllSessionStorage | getSessionStorage | setSessionStorage | removeSessionStorage | clearSessionStorage |
|  local  |  getAllLocalStorage  |  getLocalStorage  |  setLocalStorage  |  removeLocalStorage  |  clearLocalStorage  |



#### 使用案例

```shell
npm i session-cookies
```

##### 获取所有Cookies

```ts
import { cookies } from 'session-cookies'

cookies.getCookieList(); // 返回JSON结果数据
cookies.getCookie('test'); // 返回属性值
```

##### 设置单个

```ts
cookies.setCookie('test', '1234567'); // 设置属性为字符串需要JSON.stringify
```

##### 移除单个

```tsx
cookies.removeCookie('test');
```

##### 清除所有

```tsx
cookies.clearCookie();
```

#### 附加API

| 根据index下标获取key值        | 参数      | 结果    |
| ----------------------------- | --------- | ------- |
| getLocalStorageKeyFindIndex   | index下标 | 返回key |
| getSessionStorageKeyFindIndex | index下标 | 返回key |

##### 使用

```ts
import { local } from 'session-cookies';

local.setLocalStorage('test', '123456');
local.setLocalStorage('usename', 'songshao');
local.getLocalStorageKeyFindIndex(0); // test
local.getLocalStorageKeyFindIndex(1); // username
```

### Browsers

```html

<!-- 只能使用0.1.5 以后版本 -->
<script src='https://unpkg.com/session-cookies/lib/sessionCookies.js' ></script>

<script>
    // 其他接口同上面使用只需要增加 sessionCookies 全局配置。
    sessionCookies.local.setLocalStorage('test', '123456');
</script>

```
