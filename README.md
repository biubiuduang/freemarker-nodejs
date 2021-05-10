### node + freemarker 页面搭建

1、 技术栈

- NodeJS  --》 express
- freemarker --》 [文档](https://freemarker.apache.org/)
- Fmpp --》[文档](http://fmpp.sourceforge.net/configfile.html)
- .ftl 文件高亮和代码提示： 见3说明
- xml2js --》规则有些不满足现在需求 暂时不用  [文档](https://www.npmjs.com/package/xml2js)    

2、文件目录介绍
- bin
    - www 项目启动配置文件
- data 公共数据文件 ，公共数据在 fm.js 加入到 项目（如 header menu）
- engines
    - fm.js (freemarker.js 配置文件) [config](http://freemarker.js.org/)
- public  公共文件
    - less （公共样式包 放less文件） -- 编辑工具需要配置less  见3说明
    - css (请勿编辑这个页面的css文件，此文件夹下为 less自动生成的 css！！！)
    - img （图片资源）
    - js （公共js）
    - utils （第三方 js  css 等资源）
- routes 路由文件
- templates 页面模版文件
    - common 公共模版文件
- app.js express 配置文件
- package.json 项目配置、依赖项

3、说明：
- less 配置  
    [webStorm](https://jingyan.baidu.com/article/295430f1cd01890c7e0050d2.html)
    [vscode](https://www.cnblogs.com/wjsy/p/9596408.html) 仅供参考
- ftl 代码高亮配置
    webStorm : setting -》Editor -》file types -》找到HTML  + *.ftl 的支持 
    vscode : 点击菜单 文件->首选项->设置 输入如下代码
    ```editorconfig
        "files.associations": {
            "*.tpl": "html"
        }
```
