!function(e){function n(n){for(var u,i,o=n[0],c=n[1],d=n[2],a=0,p=[];a<o.length;a++)i=o[a],r[i]&&p.push(r[i][0]),r[i]=0;for(u in c)Object.prototype.hasOwnProperty.call(c,u)&&(e[u]=c[u]);for(l&&l(n);p.length;)p.shift()();return s.push.apply(s,d||[]),t()}function t(){for(var e,n=0;n<s.length;n++){for(var t=s[n],u=!0,o=1;o<t.length;o++){var c=t[o];0!==r[c]&&(u=!1)}u&&(s.splice(n--,1),e=i(i.s=t[0]))}return e}var u={},r={101:0},s=[];function i(n){if(u[n])return u[n].exports;var t=u[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=u,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var u in e)i.d(t,u,function(n){return e[n]}.bind(null,u));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/";var o=window.webpackJsonp=window.webpackJsonp||[],c=o.push.bind(o);o.push=n,o=o.slice();for(var d=0;d<o.length;d++)n(o[d]);var l=c;s.push([684,0]),t()}({1:function(e,n){e.exports=Vue},306:function(e,n,t){"use strict";var u=function(){var e=this.$createElement,n=this._self._c||e;return n("doc-guide",{attrs:{page:this.page,hasPadding:!0}},[n("script",{attrs:{type:"text/markdown"}},[this._v('\n\n# 提交代码\n\nMorning UI的协作开发基于Git的分支。\n\n## Git分支\n\nMorning UI的分支分为：\n\n- `master` : 正式版本发布的分支。\n- `dev` : 主开发分支，所有开发完毕但未发布的功能都会先合并至此。\n- `issue-[id]` : Issue开发分支，所有正在开发中的功能代码都会被提交至此分支。\n\n当你从一个issue开始，开发代码，提交代码到版本发布分为以下几个步骤：\n\n1. 标记Issue : 找到Issue，将Assignees指向你，并添加`in progress`标签，表示你正在开发中。\n2. 新建分支 : 从`dev`分支切出一个新的分支`issue-[id]`，其中id是issue的编号。\n3. 提交代码 : 将开发代码提交到这个分支上。\n4. Pull Request : 当所有开发完成之后，发起一个新的Pull Request来将代码合并到`dev`。\n5. 合入主开发分支 : 当Pull Request完成后，代码会被自动合入主开发分支`dev`。\n6. 版本发布 : 当一个版本下的所有Issue代码都被合入`dev`后，这些改动会被合入master，并添加版本tag，代码被正式发布。\n\n下面的内容将会进一步说明提交代码每一步需要做什么及注意的事项。\n\n## 标记Issue\n\n找到你想要处理的Issue，在标记之前请先确保此Issue**未处于**以下任何一个状态：\n\n- `need repro` : 需要提供更多信息复现内容，以确认问题\n- `pending` : 处于待定的Issue\n- `wont solve` : 暂时不会解决的Issue\n- `in progress` : 已经有人在处理\n- `in review` : 正在Code Review的Issue\n- `launched` : 已解决并发布的Issue\n- `discussion` : 这是一个讨论\n\n一般你可以选择处于下面这些状态，且没有指定Assignees的Issue：\n\n- `bug report` : BUG 报告，但还未确认是否是BUG\n- `bug confirmed` : 已经确认的Bug\n- `intend to solve` : 计划解决\n- `feature request` : 功能请求\n\n若一个Issue被指定了Assignees，请先和那个人商量到底由谁来处理。\n\n针对上面四个标签的Issue，在开始着手处理前，你需要添加一些额外的标记来告示别人你开始处理了：\n\n1. 首先将Assignees指向你自己\n2. 根据不同的标签做不同的处理：\n    - `bug confirmed` : 添加`in progress`\n    - `intend to solve` : 添加`in progress`，并移除`intend to solve`\n    - `feature request` : 添加`in progress` `feature`，并移除`feature request`\n    - `bug report` : 首先先确认BUG是存在的：\n        - 复现条件不足：请添加`need repro`标签\n        - 确认不是BUG：关闭Issue\n        - 可被复现：添加`bug confirmed` `in progress` `fix`，并移除`bug report`。若你只想确认这个BUG不想修复，也可以不添加`in progress` `fix`。\n\n完成上面的操作后，你需要创建一个新的分支来处理Issue。\n\n> 注意：目前新增功能、优化代码、更新逻辑等处理都被认为是`feature`。\n\n## 新建分支\n\n在你的本地项目中切换到`dev`分支：`git checkout dev`，然后执行`git pull`确保代码库是最新的。\n\n接下来为要处理的Issue新建一个名为`issue-[Issue ID]`的分支，其中`[Issue ID]`替换成Git上的Issue ID，你可以在下面的地方找到：\n\n<img src="https://h0.hucdn.com/open/201743/9498878cf00b0e68_922x180.png" width="300" alt="">\n\n注意不需要加上`#`，比如上图中的Issue你需要执行：`git checkout -b issue-1`。\n\n接下来就可以正式编码了。\n\n## 提交代码\n\n当你完成改动后，使用`git add`和`git commit`命令提交你的改动，请在提交前确保处在正确的分支上。\n\n`git commit`的信息请确保是可以描述你改动的一句话，避免使用无意义的提交信息，比如：`update`等。\n\n然后通过`git push`将代码推送到Github，首次推送新分支时需要使用`git push --set-upstream origin [分支名]`。\n\n## Pull Request\n\n当你完成了所有的编码工作，前往：`https://github.com/Morning-UI/morning-ui/pulls`，点击`New pull request`：\n\n<img src="https://h0.hucdn.com/open/201743/7e973819a866761f_2010x240.png" alt="" width="700">\n\n然后`base`选择`dev`，`compare`选择你的分支，然后你可以看到：\n\n<img src="https://h0.hucdn.com/open/201743/5e4e7f5309fbc627_1708x456.png" alt="" width="600">\n\n> 若显示无法自动合并分支，请先在本地处理完冲突的改动。\n\n点击`Create pull request`：\n\n<img src="http://h0.hucdn.com/open/201820/c91dd55364d641f0_2016x1428.png" alt="" width="600">\n\n按照上面的示例，写清楚你改动的内容及注意事项，勾选检查清单，指定贡献者为你Code Review。或者也可以添加`Request Review`标签让其他贡献者为你Code Review。\n\n若Review中存在问题你们可在`pull request`下面进行讨论，当进行Code Review的贡献者通过后，会增加`Accept Pull Request`的标签，接下来项目管理员会对代码进行合并。\n\n关于Reviwe详见：[指出问题及沟通](/guide/review.html#指出问题及沟通)\n\n## 合入主开发分支\n\n当你的`pull request`满足下面的条件：\n\n- 可被自动合并\n- 通过Code Review并有`Accept Pull Request`标签\n- 通过持续集成\n\n项目管理员会将你的代码合并至主开发分支。\n\n## 版本发布\n\n当项目管理员合并完版本中的所有`pull request`之后，会将主开发分支代码合入`master`。然后发布版本。\n\n')])])},r=[];u._withStripped=!0,t.d(n,"a",function(){return u}),t.d(n,"b",function(){return r})},684:function(e,n,t){"use strict";var u=s(t(1)),r=s(t(685));function s(e){return e&&e.__esModule?e:{default:e}}new u.default({el:"#root",render:function(e){return e(r.default)}})},685:function(e,n,t){"use strict";t.r(n);var u=t(306),r=t(71);for(var s in r)"default"!==s&&function(e){t.d(n,e,function(){return r[e]})}(s);var i=t(0),o=Object(i.a)(r.default,u.a,u.b,!1,null,null,null);o.options.__file="src/docs/pages/guide/commitcode/index.vue",n.default=o.exports},71:function(e,n,t){"use strict";t.r(n);var u=t(72),r=t.n(u);for(var s in u)"default"!==s&&function(e){t.d(n,e,function(){return u[e]})}(s);n.default=r.a},72:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var u,r=t(3),s=(u=r)&&u.__esModule?u:{default:u};n.default={data:function(){return{page:"commitcode"}},components:{"doc-guide":s.default}},e.exports=n.default}});