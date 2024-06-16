# SEO SearchEngineJumpPlus - SEO 搜索引擎快捷跳转

## 功能介绍
GPT4 修改了 `jumpToSelectedEngine` ，划词的同时获取当前网页的域名、URL，添加SEO相关的功能。其他未改变。

## 安装与使用
使用时直接安装 `searchEngineJump.user.js` 即可。

安装脚本之后，也可以直接将 `setting.json` 导入。
![image](https://github.com/Roc-kit/SearchEngineJumpPlus/blob/master/Settings.png)


## 新增功能
支持替换占位符 %s 为搜索关键词（原先就有的划词搜索），%currentUrl% 为当前页面完整URL，%currentDomain% 为当前页面的域名。


| 占位符           | 说明               | 示例链接                                              |
|----------------|-------------------|----------------------------------------------------|
| `%s`           | 搜索关键词          | https://www.whois.com/whois/%s|
| `%currentUrl%` | 当前页面完整URL     | https://ahrefs.com/broken-link-checker/?input=%currentUrl%&mode=exact|
| `%currentDomain%` | 当前页面的域名    | https://www.similarweb.com/zh/website/%currentDomain%/competitors/|

## 目前存在的问题
有些页面无法触发。

## 具体情况参考原始仓库： https://github.com/MUTED64/SearchEngineJumpPlus
