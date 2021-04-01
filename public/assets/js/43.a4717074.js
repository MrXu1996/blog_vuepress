(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{564:function(s,t,n){"use strict";n.r(t);var a=n(5),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"使用proxy代理跨域"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用proxy代理跨域"}},[s._v("#")]),s._v(" 使用Proxy代理跨域")]),s._v(" "),n("p",[s._v("什么是跨域？")]),s._v(" "),n("p",[s._v("域名 协议 ip地址 端口 任何一个不一样 就跨域")]),s._v(" "),n("p",[s._v("解决跨域？")]),s._v(" "),n("p",[s._v("1 jsonp   ---使用script的src发送   只能get 请求")]),s._v(" "),n("p",[s._v("2 cors 后台设置允许跨域    "),n("strong",[s._v("需要后台设置")]),s._v(" 允许跨域")]),s._v(" "),n("p",[s._v("​      所有后台语言 都可以设置")]),s._v(" "),n("p",[s._v("3  服务器代理")]),s._v(" "),n("p",[n("strong",[s._v("重点 现在 前端 vue 框架 是可以自己设置 服务器代理的")]),s._v("  proxy")]),s._v(" "),n("p",[s._v("​         "),n("strong",[s._v("配置就行")])]),s._v(" "),n("p",[n("strong",[s._v("vue在 vue.config.js  可以配置重写webpack")])]),s._v(" "),n("blockquote",[n("p",[s._v("分析: 本题考查如何解决跨域问题")]),s._v(" "),n("p",[s._v("解析: 解决跨域问题的方式有几种,")]),s._v(" "),n("p",[n("strong",[s._v("1 一种是服务端设置")]),s._v("  , 但这种方式依赖服务端的设置,在前后分离的场景下 ,不太方便")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('Access-Control-Allow-Origin：*\nAccess-Control-Allow-Methods："POST, GET, OPTIONS, DELETE"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("strong",[s._v("2 还有一种jsonp形式")]),s._v(", 可以利用script标签 的特性解决同源策略带来的跨域问题,但这是这种方案对于请求的类型有限制,只能get")]),s._v(" "),n("p",[n("strong",[s._v("3 还有一种就可以在开发环境(本地调试)期间,进行代理")]),s._v(", 说白了 就是通过 在本地通过nodejs 启动一个微型服务,")]),s._v(" "),n("p",[s._v("然后我们先请求我们的微型服务, 微型服务是服务端, 服务端**"),n("code",[s._v("代我们")]),n("strong",[s._v("去请求我们想要的跨域地址, 因为服务端是不受")]),n("code",[s._v("同源策略")]),s._v("**的限制的, 具体到开发中,打包工具webpack集成了代理的功能,可以采用配置webpack的方式进行解决, 但是这种仅限于 本地开发期间, "),n("strong",[s._v("等项目上线时,还是需要另择代理 nginx")])])]),s._v(" "),n("p",[s._v("以下为webpack配置代理的配置")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// vue.config.js")]),s._v("\nmodule.exports = "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 修改的配置")]),s._v("\n  devServer"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      proxy"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          '/api'"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n              target"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 'http"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//122.51.238.153',")]),s._v("\n              changeOrigin"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n              pathRewrite"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                '^/api'"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" ''\n              "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[n("strong",[n("code",[s._v("target")])]),s._v("：接口域名；")]),s._v(" "),n("p",[n("strong",[n("code",[s._v("changeOrigin")])]),s._v("： 如果设置为"),n("code",[s._v("true")]),s._v(",那么本地会虚拟一个服务端接收你的请求并代你发送该请求；")]),s._v(" "),n("p",[n("strong",[n("code",[s._v("pathRewrite")])]),s._v("：如果接口中是没有api的，那就直接置空（如上）如果接口中有api，就需要写成{‘^/api’:‘’}")]),s._v(" "),n("p",[n("strong",[s._v("上线了如果还有跨域 可以让后台设置 允许跨域")])])])}),[],!1,null,null,null);t.default=e.exports}}]);