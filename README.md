### node + freemarker 页面搭建

1、 技术栈

- NodeJS  --》 express
- freemarker --》 [文档](https://freemarker.apache.org/)
- Fmpp --》[文档](http://fmpp.sourceforge.net/configfile.html)
- .ftl 文件高亮和代码提示： 
    - webstorm ： setting -》Editor -》file types -》找到HTML  + *.ftl 的支持 
    - vscode： 谁用vscode 请完善
- xml2js --》 [文档](https://www.npmjs.com/package/xml2js)    规则有些不满足现在需求 暂时不用

2、文件目录介绍
- bin
    - www 项目启动配置文件
- data 公共数据文件 ，公共数据在 fm.js 加入到 项目（如 header menu）
- engines
    - fm.js (freemarker.js 配置文件) [config](http://freemarker.js.org/)
- public  公共文件
    - stylesheets （公共样式包）
    - img （图片资源）
    - js （公共js）
    - utils （第三方 js  css 等资源）
- routes 路由文件
- templates 页面模版文件
    - common 公共模版文件
- app.js express 配置文件
- package.json 项目配置、依赖项
