/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "G:\\myproject\\myblog\\blog_vuepress\\xzh_blog\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-0cc20baa",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-0cc20baa").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-48972ba3",
    path: "/blogs/category1/2018/121501.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-48972ba3").then(next)
    },
  },
  {
    name: "v-0bf9c7e3",
    path: "/blogs/category1/2019/092101.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-0bf9c7e3").then(next)
    },
  },
  {
    name: "v-ac586ffa",
    path: "/blogs/category2/2016/121501.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-ac586ffa").then(next)
    },
  },
  {
    name: "v-6d366443",
    path: "/blogs/category2/2017/092101.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-6d366443").then(next)
    },
  },
  {
    name: "v-bdff7bd4",
    path: "/blogs/other/guide.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-bdff7bd4").then(next)
    },
  },
  {
    name: "v-a0084e8a",
    path: "/docs/theme-reco/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-a0084e8a").then(next)
    },
  },
  {
    path: "/docs/theme-reco/index.html",
    redirect: "/docs/theme-reco/"
  },
  {
    name: "v-8f1586a0",
    path: "/docs/theme-reco/api.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-8f1586a0").then(next)
    },
  },
  {
    name: "v-bf958874",
    path: "/docs/theme-reco/plugin.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-bf958874").then(next)
    },
  },
  {
    name: "v-c0c0b760",
    path: "/docs/theme-reco/theme.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-c0c0b760").then(next)
    },
  },
  {
    name: "v-b1564aac",
    path: "/tag/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tags", "v-b1564aac").then(next)
    },
    meta: {"pid":"tags","id":"tags"}
  },
  {
    path: "/tag/index.html",
    redirect: "/tag/"
  },
  {
    name: "v-ef9325c4",
    path: "/categories/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterKey", "v-ef9325c4").then(next)
    },
    meta: {"pid":"categories","id":"categories"}
  },
  {
    path: "/categories/index.html",
    redirect: "/categories/"
  },
  {
    name: "v-6319eb4e",
    path: "/timeline/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("TimeLines", "v-6319eb4e").then(next)
    },
    meta: {"pid":"timeline","id":"timeline"}
  },
  {
    path: "/timeline/index.html",
    redirect: "/timeline/"
  },
  {
    name: "v-1368f264",
    path: "/tag/tag1/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-1368f264").then(next)
    },
    meta: {"pid":"tags","id":"tag1"}
  },
  {
    path: "/tag/tag1/index.html",
    redirect: "/tag/tag1/"
  },
  {
    name: "v-1368f226",
    path: "/tag/tag2/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-1368f226").then(next)
    },
    meta: {"pid":"tags","id":"tag2"}
  },
  {
    path: "/tag/tag2/index.html",
    redirect: "/tag/tag2/"
  },
  {
    name: "v-1368f1e8",
    path: "/tag/tag3/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-1368f1e8").then(next)
    },
    meta: {"pid":"tags","id":"tag3"}
  },
  {
    path: "/tag/tag3/index.html",
    redirect: "/tag/tag3/"
  },
  {
    name: "v-1368f1aa",
    path: "/tag/tag4/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-1368f1aa").then(next)
    },
    meta: {"pid":"tags","id":"tag4"}
  },
  {
    path: "/tag/tag4/index.html",
    redirect: "/tag/tag4/"
  },
  {
    name: "v-5ce69b3a",
    path: "/categories/category1/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Category", "v-5ce69b3a").then(next)
    },
    meta: {"pid":"categories","id":"category1"}
  },
  {
    path: "/categories/category1/index.html",
    redirect: "/categories/category1/"
  },
  {
    name: "v-5ce69b59",
    path: "/categories/category2/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Category", "v-5ce69b59").then(next)
    },
    meta: {"pid":"categories","id":"category2"}
  },
  {
    path: "/categories/category2/index.html",
    redirect: "/categories/category2/"
  },
  {
    path: '*',
    component: GlobalLayout
  }
]