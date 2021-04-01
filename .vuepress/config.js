module.exports = {
  "title": "XZH\'s blog",
  "description": "个人博客",
  "base": "/press/",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    subSidebar: 'auto',
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "自定义函数库",
        "icon": "reco-message",        
        "link": "/custom-tool/01_创建工具包项目"
      },      
      {
        "text": "使用手册",
        "icon": "reco-api",
        "items": [
          {
            "text": "css参考手册",
            "link": "http://css.doyoe.com/"
          },
          {
            "text": "jQuery参考手册",
            "link": "https://jquery.cuishifeng.cn/"
          },
          {
            "text": "vue.js",
            "link": "https://cn.vuejs.org/v2/guide/"
          },
          {
            "text": "Elememt UI",
            "link": "https://element.eleme.cn/#/zh-CN"
          },
          {
            "text": "Vant",
            "link": "https://youzan.github.io/vant/#/zh-CN/"
          },
        ]
      },
      {
        "text": "常用工具",
        "icon": "reco-menu",
        "items": [
          {
            "text": "1. 配色类",
            "items": [
              {
                "text": "Color Hunt",
                "link": "http://colorhunt.co"
              },
              {
                "text": "WebGradients",
                "link": "https://webgradients.com/"
              }
            ]
          },
          {
            "text": "2. 图标类",
            "items": [
              {
                "text": "iconfont",
                "link": "http://www.iconfont.cn/plus"
              },
              {
                "text": "easyicon",
                "link": "http://www.easyicon.net"
              }
            ]
          },
          {
            "text": "3. 插件类",
            "items": [
              {
                "text": "jQuery插件",
                "link": "http://www.jq22.com/"
              },
              {
                "text": "jQuery之家",
                "link": "http://www.htmleaf.com/"
              },
              {
                "text": "Layui",
                "link": "https://www.layui.com/"
              }
            ]
          },
          {
            "text": "4. 素材类",
            "items": [
              {
                "text": "千库网",
                "link": "http://588ku.com/"
              },
              {
                "text": "Unsplash",
                "link": "https://unsplash.com/"
              }
            ]
          },
          {
            "text": "5. 工具类",
            "items": [
              {
                "text": "技术文章",
                "link": "http://www.css88.com/"
              },
              {
                "text": "在线工具",
                "link": "http://tool.lu/"
              },
              {
                "text": "学UI网",
                "link": "http://www.xueui.cn/"
              },
              {
                "text": "图片压缩",
                "link": "https://tinypng.com/"
              }
            ]
          }
        ]
      }
    ],
    "sidebar": {
      "/custom-tool/": [
        {
          title: '打包自定义工具库',  //组名
          children: ['01_创建工具包项目', '02_发布到npm', '03_使用自定义工具包'],   //该分组下要显示的文件的目录
        },
        {
          title: '各种自定义',  //组名
          children: ['11_函数相关', '12_数组相关', '13_对象相关', '14_字符串相关', '15_手写DOM事件监听', '16_手写ajax请求', '17_手写事件总线'],   //该分组下要显示的文件的目录
        },
        {
          title: '快速搭建在线文档网站',  //组名
          children: ['vuepress'],   //该分组下要显示的文件的目录
        },
        // "",
        // "tool",
        // "vuepress"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "基础笔记"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.jpg",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "xzh",
    "authorAvatar": "/avatar.png",
    "record": "鄂ICP备2021003708号-1",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
  },
  plugins: [
    ["reading-progress", true],
    // ["back-to-top", true],
    ['vuepress-plugin-code-copy', true],
    ["dynamic-title",{
        showIcon: "/favicon.ico",
        showText: "(/≧▽≦/)欢迎回来！",
        hideIcon: "/failure.ico",
        hideText: "(●—●)哦吼，不要走",
        recoverTime: 2000
      }]
  ]
}