---
title: vuex
date: 2020-12-22
categories:
 - VUE
tags: 
 - vue基础
---

## vuex怎么合理规范管理数据

> 解析: 此题考查 vuex中数据的管理和数据结构的设计,还有mutations 和actions的区别

> **`解答`** : 首先要明确一个特别重要的原则, 就是 不是所有的数据都要放在vuex中, 因为vuex有一句名言:假如你并不知道为什么要使用vuex,那就不要使用它 !
>
> 那么什么样式的数据需要放在vuex中呢 ? 首先这个数据肯定要被多个组件频繁用到, 如果只是被一个组件 用到, 那完全没有任何必要为了使用vuex和使用vuex

举例:  一个网站用户的昵称,账号,资料,像这种系统级别的信息 随时可能在业务中展示,使用, 如果在组件中存储, 那么要获取N次, 所以**`系统级别的数据`**是需要放置在vuex中的, 那么系统级别数据 也不能所以的放置,为了让数据看着更有层级结构感,可以按照像下面这样设计,  

```json
{
    // 系统消息
    system: {
        user: {},
        setting: {}
    }
}
```

> 上面这种结构,一看 便知道我们应该哪里获取系统数据即 设置数据

如果有些业务数据,也需要共享,最好按照模块的具体业务含义分类 , 比如下面

```json
{
    // 系统消息
    system: {
        user: {},
        setting: {}
    },
    product: {
        productList: [], // 商品信息列表
        productOrders: [] // 商品订单啊列表
    }
}
```

> 如上图代码所示,我们很清晰的能够分清楚 每个模块的数据,这样不会导致数据管理的混乱

## mutations和 actions 的区别

> 不同于redux只有一个action, vuex单独拎出了一个mutations,  它认为 更新数据必须是同步的, 也就是只要调用了 提交数据方法, 在mutation里面才可以修改数据
>
> 那么如果我们想做 异步请求,怎么做?  这里 vuex提供了专门做异步请求的模块,action, 当然action中也可以做同步操作, 只不过 分工更加明确, 所有的数据操作 不论是同步还是异步 都可以在action中完成, 
>
> mutation只负责接收状态, 同步完成 **`数据快照`**
>
> 所以可以认为 
>
> state => 负责存储状态 
>
> mutations => 负责同步更新状态
>
> **actions => 负责获取 处理数据（如果有异步操作必须在action处理 再到mutation）**, 提交到mutation进行状态更新

## vuex模块化module管理,使用的时候有注意事项

> 分析: 此题考查 当vuex维护的数据越来越复杂的时候, 模块化的解决方案
>
> **`解析`**:使用单一的状态树，应用的所有状态都会**`集中在一个比较大的对象`**上面，随着项目需求的不断增加，状态树也会变得越来越臃肿，增加了状态树维护的复杂度,而且代码变得沉长；因此我们需要**`modules(模块化)`**来为我们的状态树**`分隔`**成不同的模块，每个模块拥有自己的state，getters，mutations，actions；而且允许每个module里面嵌套子module；如下：
>
> ```
> store
>  ├── index.js          # 我们组装模块并导出 store 的地方
>  ├── actions.js        # 根级别的 action
>  ├── mutations.js      # 根级别的 mutation
>  ├── state.js          # 根级别的 state
>  └── modules
>      ├── module1.js   # 模块1的state树
>      └── module2.js   # 模块2的state树
> ```

上面的设计中, 每个vuex子模块都可以定义 state/mutations/actions

> 需要注意的是  我们原来使用**`vuex辅助函数`**  mapMutations/mapActions  引入的是 全局的的mutations 和actions , 并且我们vuex子模块  也就是module1,module2 ... 这些模块的aciton /mutation 也注册了全局, 
>
> 也就是如果 module1 中定义了 loginMutation, module2中也定义了 loginMutation, 此时, mutation就冲突了
>
> 如果重名,就报错了.....
>
> 如果不想冲突, 各个模块管理自己的action 和 mutation ,需要 给我们的子模块一个 属性 **`namespaced: true`**

那么 组件中怎么使用子模块的action 和 mutations

你写一遍 步骤基本是死的 熟悉就好了

```js
// 你可以将模块的空间名称字符串作为第一个参数传递给上述函数，这样所有绑定都会自动将该模块作为上下文
 methods:{
     ...mapMutations('m1', ['loginMutation']),
     add(){
       console.log('add',this)
      //  this.$store.commit("m1/loginMutation")
      // 或者下面的  先mapMutations 相当于帮你写了commit
      // this.loginMutation()
     }
  }

     // 这句话的意思是 直接 解构出 全局 m1模块下的 loginMutation 
    // 把loginMutation 放到this上 并且帮你写好了 commit
    // 相当于帮你简化了代码
     ...mapMutations('m1', ['loginMutation']),
       //不是modules的直接写  ...mapMutations( ['loginMutaton]) 
       
```

> 此题具体考查 Vuex虽然是一个公共状态, 但是公共状态还可以切分成若干个子状态模块, 也就是moduels,
>
> 解决当我们的状态树过于庞大和复杂时的一种解决方案.  但是笔者认为, 一旦用了vuex, 几乎 就认定该项目是较为复杂的

[参考文档](https://vuex.vuejs.org/zh/guide/modules.html)

