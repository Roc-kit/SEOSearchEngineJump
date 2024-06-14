# SearchEngineJumpPlus 搜索引擎快捷跳转

## 说明
GPT4 修改了 jumpToSelectedEngine ，划词的同时获取当前网页的域名、URL，添加SEO相关的功能。其他未改变。

使用时直接安装 searchEngineJump.user.js 即可。

支持替换占位符 %s 为搜索关键词，%currentUrl% 为当前页面完整URL，%currentDomain% 为当前页面的域名。例如：

    https://ahrefs.com/broken-link-checker/?input=%currentUrl%&mode=exact

    https://www.similarweb.com/zh/website/%currentDomain%/competitors/

    https://www.whois.com/whois/%s

安装脚本之后，也可以直接将 setting.json 导入。


## 具体情况参考原始仓库： https://github.com/MUTED64/SearchEngineJumpPlus